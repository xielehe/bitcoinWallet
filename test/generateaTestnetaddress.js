const fs = require('fs')
const bitcoin = require('bitcoinjs-lib')
const TESTNET = bitcoin.networks.testnet
const KEYPATH = './keys.json'

 const main = () =>{
    const keyPair = bitcoin.ECPair.makeRandom({ network: TESTNET })
    const { address } = bitcoin.payments.p2pkh({ network: TESTNET, pubkey: keyPair.publicKey })
    fs.writeFileSync(KEYPATH, JSON.stringify([...JSON.parse(fs.readFileSync(KEYPATH).toString()), keyPair.toWIF()]))
    return { keyPair, address }
}

module.exports = main

if (require.main === module) {
    console.log(main())
}

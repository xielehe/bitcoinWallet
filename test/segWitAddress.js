const fs = require('fs')
const bitcoin = require('bitcoinjs-lib')
const TESTNET = bitcoin.networks.testnet

 const main = () =>{
    const keyPair = bitcoin.ECPair.makeRandom({ network: TESTNET })
    const { address } = bitcoin.payments.p2sh({
      redeem: bitcoin.payments.p2wpkh({ pubkey: keyPair.publicKey, network: TESTNET }),
    });
    return { keyPair: keyPair.toWIF(), address }
}

module.exports = main

if (require.main === module) {
    console.log(main())

}

// {
//     keyPair: 'cSSDV2Rcfm2YjsPYkVZN55KPo2qAoeFF2y4P8y5ssBUGK4YV4Yz7',
//     address: 'mvT3TmErbnLJ4WLVA3HjGKcqRbcrh7o3WF'
// }

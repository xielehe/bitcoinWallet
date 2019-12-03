const bitcoin = require('bitcoinjs-lib')
const TESTNET = bitcoin.networks.testnet

  const alice = bitcoin.ECPair.fromWIF(
      'cSSDV2Rcfm2YjsPYkVZN55KPo2qAoeFF2y4P8y5ssBUGK4YV4Yz7', TESTNET
  )

  const psbt = new bitcoin.Psbt({ network: TESTNET })
  psbt.addInput({
      hash: '2f99db99730e8f64c2d4a6f5c21266f702a8f0661fc1f4934fbb1c93484e99a8',
      index: 0,
      witnessUtxo: {
        script: Buffer.from(
          'a91444e59064f10a84f25ad519f5d9012308e76b029e87',
          'hex',
        ),
        value: 1000000,
      },
      // redeemScript: Buffer.from(alice.publicKey)
  })
  psbt.addOutput({
      address: 'mv4rnyY3Su5gjcDNzbMLKBQkBicCtHUtFB',
      value: 990000,
  });
  psbt.signInput(0, alice)
  psbt.validateSignaturesOfInput(0)
  psbt.finalizeAllInputs()

const hxx = psbt.extractTransaction().toHex()
console.log(hxx)

const bitcoin = require('bitcoinjs-lib')
const TESTNET = bitcoin.networks.testnet

  const alice = bitcoin.ECPair.fromWIF(
      'cRKrXLq8P8VyC3CsyFRpzj1r44kZRWEL75FRR3iLTWcBNCr1EUod', TESTNET
  );
  const psbt = new bitcoin.Psbt({ network: TESTNET })
  psbt.addInput({
      hash: '1fa964687a356bd68379a3fbd952e0455eecc7fa5b8a5eed097330ae9139e2e8',
      index: 0,
      nonWitnessUtxo: Buffer.from(
        '0200000000010155fc144ba25900c7d5d71191b5539d4f7d1bbdd63245f06fabd078a4c1d18b9901000000171600142d92f2598f1b851f04ee9edcf30244a049bdb474feffffff02cf8d2500000000001976a914e3fe35c2b469984ce3e39469a8f161406e26bf7488ac3682df100100000017a91446d449c93cdbab04189720ff6a66cf64cbfcb2e6870247304402205d4de887dd522190e0084ced8b9190fbfde50ef9ca3125050123a1b3e503e7ae022037d22aa86619220874fa57a7c6b6438b08325c2588389d7767d48520f549511601210239944bc16786f2ad9afe33da23a9c584519a3a42006e241a827162f735cf3ca5cb941800',
        'hex',
      ),
  })
  psbt.addOutput({
      address: 'mv4rnyY3Su5gjcDNzbMLKBQkBicCtHUtFB',
      value: 2401135,
  });
  psbt.signInput(0, alice)
  psbt.validateSignaturesOfInput(0)
  psbt.finalizeAllInputs()

const hxx = psbt.extractTransaction().toHex()
console.log(hxx)

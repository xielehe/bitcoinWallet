const bitcoin = require('bitcoinjs-lib')
const TESTNET = bitcoin.networks.testnet

  const alice = bitcoin.ECPair.fromWIF(
      'cRKrXLq8P8VyC3CsyFRpzj1r44kZRWEL75FRR3iLTWcBNCr1EUod', TESTNET
  );
  const p2shObj  = bitcoin.payments.p2sh({
    redeem: bitcoin.payments.p2wpkh({network: TESTNET, pubkey: alice.publicKey }),
  });
  const { address } = p2shObj
  // 2N1pjgGDmGHdhTCnTuGDHH4s3sbavqd21z5
  const redeemScript = p2shObj.redeem.output;

  const psbt = new bitcoin.Psbt({ network: TESTNET })
  psbt.addInput({
      hash: 'e38dd9eb7f1af1d1598ab286acc8972719d7821496972eaa6759e313e5b54930',
      index: 1,
      witnessUtxo: {
        script: Buffer.from(
          'a9145e178431f1a7c5b9f51999f3a5448457a4dbdea787',
          'hex',
        ),
        value: 1527626,
      },
        redeemScript
  })
  psbt.addOutput({
      address: 'mv4rnyY3Su5gjcDNzbMLKBQkBicCtHUtFB',
      value: 1507626,
  });
  psbt.signInput(0, alice)
  psbt.validateSignaturesOfInput(0)
  psbt.finalizeAllInputs()

const hxx = psbt.extractTransaction().toHex()
console.log(hxx)

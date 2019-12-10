const bitcoin = require('../seg/js/bitcoinjs-lib-3.1.1')
const TESTNET = bitcoin.networks.testnet

  const keyPair = bitcoin.ECPair.fromWIF(
      'cVBD9q4biEZNGK3xEaat3pePMiKFNhwShmQpWr9QL2UNatDjXHB2', TESTNET
  )
      const pubKey = keyPair.getPublicKeyBuffer()
      const pubKeyHash = bitcoin.crypto.hash160(pubKey)
      const redeemScript = bitcoin.script.witnessPubKeyHash.output.encode(pubKeyHash)
      const redeemScriptHash = bitcoin.crypto.hash160(redeemScript)
      const scriptPubKey = bitcoin.script.scriptHash.output.encode(redeemScriptHash)

      const txb = new bitcoin.TransactionBuilder(TESTNET)
      txb.addInput("66123eec6ca81f29f2f224ecf70fea978f009654acb154ca282ac92d2a05d1b0",0,
        0xffffffff,
        scriptPubKey
      )
      txb.addOutput('2NGZrVvZG92qGYqzTLjCAewvPZ7JE8S8VxE', 9000)
      txb.sign(0, keyPair, redeemScript, null, 10000)
      const tx = txb.build()
      var tx_raw = tx.toHex()
      console.log(tx_raw)


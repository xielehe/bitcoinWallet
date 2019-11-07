const R = require('ramda')
const axios = require('axios')
const dotenv = require('dotenv')
dotenv.config()

const get = async () =>{
    const url = `${process.env.APIURL}/addr/${process.env.address}/utxo`
    const fnus = await axios.get(url).then(R.prop('data')).catch(R.identity)
    return R.sum(fnus.map(R.prop('satoshis')))
}
module.exports = get

if (require.main === module) {
    get().then(console.log)
}
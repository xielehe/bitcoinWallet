const R = require('ramda')
const axios = require('axios')

const get = async () => {
    const url = 'https://bitcoinfees.earn.com/api/v1/fees/recommended'
    const fees = await axios.get(url).then(R.prop('data')).catch(R.identity)
    return fees.halfHourFee
}

module.exports = get

if(require.main === module) {
    get().then(console.log)
}


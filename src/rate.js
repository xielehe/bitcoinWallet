const R = require('ramda')
const axios = require('axios')

const get = async () => {
    const url = 'https://blockchain.info/ticker'
    const rates = await axios.get(url).then(R.prop('data')).catch(R.identity)
    return R.path(['CNY', 'sell'], rates)
}

module.exports = get

if (require.main === module) {
    get().then(console.log)
}
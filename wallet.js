const rate = require('./src/rate')
const unSpend = require('./src/unSpend')

const main = async () =>{
    const nowRate = await rate()
    const amount = await unSpend()
    const cny = (nowRate*amount/100000000).toFixed(2)
    console.log('\x1b[32m', `当前余额 ${cny} 元`)

}

main()
const Router = require('koa-router');

const db = require('../db');

// 创建路由
var router = new Router();

router.get('/', async (ctx, next) => {

    let data = await db.find('orderlist', {});
    // console.log(ctx.query,username,res)
    let res = {
        code: 0,
        data: data
    }
    ctx.body = res;
})

module.exports = router;
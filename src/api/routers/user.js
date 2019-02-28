const Router = require('koa-router');

const db = require('../db');

// 创建路由
var router = new Router();

router.get('/', async (ctx, next) => {

    let data = await db.find('user', {}); ''
    // console.log(ctx.query,username,res)
    let res = {
        code: 0,
        data: data
    }
    ctx.body = res;
})


// 判断用户名是否存在
router.get('/', async (ctx, next) => {
    let { username } = ctx.query;

    let res = await db.find('user', { username }); console.log(ctx.query, username, res)

    if (res.length > 0) {
        ctx.body = 'no'
    } else {
        ctx.body = 'yes'
    }
})



module.exports = router;
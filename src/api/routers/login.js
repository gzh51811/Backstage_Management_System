const Router = require('koa-router');

const db = require('./../db');

// 创建路由
var router = new Router();


/**
 * ctx
 */
router.post('/', async (ctx, next) => {
    // 解构
    let { username, password } = ctx.request.body;
    // console.log({ username, password });

    let res = await db.find('user', { username, password });

    res = res[0];
    // console.log(res);
    if (res) {
        ctx.body = 1;
    } else {
        ctx.body = 0;
    }



    // 存入数据库

})

module.exports = router;
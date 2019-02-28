const Router = require('koa-router');

const db = require('../db');

var ObjectId = require('mongodb').ObjectId;

// 创建路由
var router = new Router();

router.get('/', async (ctx, next) => {

    let data = await db.find('goodlist', {});
    // console.log(ctx.query,username,res)
    let res = {
        code: 0,
        data: data
    }
    ctx.body = res;
})

router.post('/', async (ctx, next) => {
    // 解构
    let { _id } = ctx.request.body;
    // console.log('ObjectId(' + _id + ')');

    let res = await db.delete('goodlist', { _id: ObjectId(_id) });

    ctx.body = res;
    // 存入数据库

})
module.exports = router;
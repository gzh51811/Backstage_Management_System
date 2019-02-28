const Router = require('koa-router');

const db = require('../db');

var ObjectId = require('mongodb').ObjectId;

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

<<<<<<< HEAD

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



=======
router.post('/', async (ctx, next) => {
    // 解构
    let { _id } = ctx.request.body;
    // console.log('ObjectId(' + _id + ')');

    let res = await db.delete('user', { _id: ObjectId(_id) });

    ctx.body = res;
    // 存入数据库

})
>>>>>>> cea1409ec6cee2ac06d33ca182a411db7e06dd7b
module.exports = router;
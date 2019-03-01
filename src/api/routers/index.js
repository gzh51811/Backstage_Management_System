const Koa = require('koa');
const Router = require('koa-router');
const koaBody = require('koa-body');

// 创建路由
var router = new Router();

// 引入页面路由
const goodlist = require('./goodlist');
const orderlist = require('./orderlist');
const loginRouter = require('./login');
const userRouter = require('./user');
const registerRouter = require('./register');
const goodtype = require('./goodtype');
const search = require('./search');

router.use(koaBody({
    // 支持formdata
    multipart: true,

    // 文件支持
    formidable: {
        // 指定保存路径
        uploadDir: './uploads',
        keepExtensions: true,
        // 改文件名
        onFileBegin(filename, file) {
            // filename: 上传文件的原始名
            // file:文件信息对象
            //   * path:
            // file.path = './uploads/'+filename
        }
    }
}));

router.use('/goodlist', goodlist.routes())
router.use('/login', loginRouter.routes())
router.use('/user', userRouter.routes())
router.use('/register', registerRouter.routes())
router.use('/orderlist', orderlist.routes())
router.use('/goodtype', goodtype.routes())
router.use('/search', search.routes())



module.exports = router;
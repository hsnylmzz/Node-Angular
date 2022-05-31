const Koa = require('koa')
const Router = require('koa-router')
const app = new Koa()
const router = new Router()

router.get('/index',(ctx)=>{
    ctx.body = "<h1> INDEX SAYFASINA HOŞGELDİNİZ </h1>"
    ctx.status = 200
})

router.get('/about',(ctx)=>{
    ctx.body = "<h1> HAKKIMDA SAYFASINA HOŞGELDİNİZ </h1>"
    ctx.status = 200
})
router.get('/contact',(ctx)=>{
    ctx.body = "<h1> ILETISIM SAYFASINA HOŞGELDİNİZ </h1>"
    ctx.status = 200
})
app.use(router.routes())
const port = 3000
app.listen(port,() =>{
    console.log(`Sunucu ${port} portta çalışmaya başladı`)
})
const express = require('express');
const bodyParser = require('body-parser')
var app = express(); //开启服务
var items = require('./items') //导入路由模块

app.use(bodyParser.json()) //使用中间件处理json方法
app.use(bodyParser.urlencoded({
    extended: true
})) //使用中间件处理路由发送请求的方法
app.use(express.static('public')) //设置静态资源文件夹

app.use('/items', items); //路径带items的就带到items模块

app.listen(3000, () => { //监听8080端口
    console.log('server prot 3000 is running')
})
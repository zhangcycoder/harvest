const mongoose = require('mongoose');//导入模块
const Schemas = require('./Schema')
var Exam = mongoose.model('exam',Schemas.item)//构造一个函数用来操作添加库表

/*链接数据库 connect表示连接 connection表示连接中 有on事件可用 例:*/

// var url = 'mongodb://127.0.0.1:27017/practice'//设置url
// mongoose.connect(url,{useNewUrlParser: true, useUnifiedTopology: true});//连接url并设置解析方式
// mongoose.connection.on('error',(err)=>{//监听连接状态
//     console.log('数据库连接失败')
// })
// mongoose.connection.once('open',()=>{//连接成功返回
//     console.log("数据库连接成功")
// })


mongoose.connect('mongodb://127.0.0.1:27017/practice', { useNewUrlParser: true, useUnifiedTopology: true }, function (err) {
    if (err) {
        throw err
    } else {
        console.log('Database connection successful')
    }
});


function Dbase() {
    //添加到Students库
    this.infoAll = function (params, callback) {
        console.log('数据库')
        Exam.find({}, (err, objects) => {
            console.log(objects)
            if (!err) {
                callback({
                    message: "全部数据",
                    data: objects
                })
            }
        })
    }
    var timea = new Date();
    var time = timea.toLocaleString();
    console.log(time)
    this.add = function (params, callback) {
        
        var exam = new Exam({//实例化出一个对象
            name: params.name,
            age: params.age,
            sex: params.sex,
            cla: params.cla,
            hobby: params.hobby,
            time: time
        })
        // console.log(exam)
        exam.save((error, data) => {
            console.log(data)
            if (!error) {
                callback({
                    message: "添加成功",
                    data: data
                })
            }
        })
    }

    this.info = function (params,callback) {
        Exam.find({ name: params.name }, (err, data) => {
            if (!err) {
                callback({
                    message: "查找到",
                    data:data
                })
            }
        })
    }

    this.del = function (params,callback) {
        Exam.remove({ name: params.name }, (err, data) => {
            if (!err) {
                callback({
                    message: "删除成功",
                    data:data
                })
            }
        })
    }

    this.updates = function (params,callback) {
        Exam.update({ name: params.name },params, (err, data) => {
            if (!err) {
                callback({
                    message: "修改成功",
                    data:data
                })
            }
        })
    }

    
}


module.exports = Dbase
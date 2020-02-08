const express = require('express');
const router = express.Router();
var Dbase = require('./dataBase')
var Dbase = new Dbase();
//添加元素
router.get('/abc', function (req, res) {
    var params = req.query
    console.log('全部')
    Dbase.infoAll(params, (objects) => {
        console.log(objects,'22')
        res.send(JSON.stringify(objects))
    })
})

router.get('/info', function (req, res) {
    var params = req.query
    Dbase.info(params, (objects) => {
        res.send(JSON.stringify(objects))
    })
})

router.post('/add', function (req, res) {
    var params = req.body
    Dbase.add(params, (objects) => {
        res.send(JSON.stringify(objects))
    })
})

router.post('/del', function (req, res) {
    var params = req.body
    Dbase.del(params, (objects) => {
        res.send(JSON.stringify(objects))
    })
})

router.post('/update', function (req, res) {
    var params = req.body
    Dbase.updates(params, (objects) => {
        res.send(JSON.stringify(objects))
    })
})


module.exports = router
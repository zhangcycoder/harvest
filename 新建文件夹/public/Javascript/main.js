//

function domTxt() {
    obj = document.getElementsByName('hobby');
    checkVal = [];
    for (k in obj) {
        if (obj[k].checked) {
            checkVal.push(obj[k].value);
        }
    }
    var data = {
        name: $('.name').val(),
        age: $('.age').val(),
        sex: $('input[name="sex"]:checked').val(),
        hobby: checkVal,
        cla: $('.cla').val()
    }
    return data
}

function domNode(data) {
    var div = $('<div id="zcymask"></div>')
    var div2 = $('<div id="zcyshow" center></div>')
    div.append(div2)
    $('body').append(div)
    var domDate = data.map((m) => {
        return `
        <tr>
        <td>${m.name}</td>
        <td>${m.age}</td>
        <td>${m.sex}</td>
        <td>${m.hobby}</td>
        <td>${m.cla}</td>
        <td>${m.time}</td>
        <td>
            <button class="btn btn-primary update  btn-lg" data-toggle="modal" data-target="#myModal2">修改</button>
            <button class="btn btn-primary del btn-lg" data-toggle="modal" data-target="#myModal">删除</button>
        </td>
        </tr>
        `
    }).join('');
    $('tbody').html(domDate)
}
infoAll()

function infoAll() {
    console.log(33)
    $.ajax({
        type: "GET", //默认get
        url: "http://127.0.0.1:3000/items/abc", //默认当前页
        // data: "data", //格式{key:value}
        dataType: "json",
        beforeSend: function () {}, //请求发送前回调,常用验证
        success: function (response) { //请求成功回调
            console.log('查找中')
            domNode(response.data)
        },
        error: function (e) { //请求超时回调
            console.log('111')
            if (e.statusText == "timeout") {
                alert("请求超时");
            }
        },
        complete: function () {}, //无论请求是成功还是失败都会执行的回调，常用全局成员的释放，或者页面状态的重置
    });
}


$('.zcyBut').click(function () {
    var data = domTxt();
    $.ajax({
        type: "POST", //默认get
        url: "http://127.0.0.1:3000/items/add", //默认当前页
        data: data, //格式{key:value}
        dataType: "json",
        beforeSend: function () {}, //请求发送前回调,常用验证
        success: function (response) { //请求成功回调
            console.log(response)
            infoAll()
        },
        error: function (e) { //请求超时回调
            if (e.statusText == "timeout") {
                alert("请求超时");
            }
        },
        complete: function () {}, //无论请求是成功还是失败都会执行的回调，常用全局成员的释放，或者页面状态的重置
    });
})

$('.info').click(function () {
    var data = {
        name: $('.infoInput').val()
    }
    $.ajax({
        type: "GET", //默认get
        url: "http://127.0.0.1:3000/items/info", //默认当前页
        data: data, //格式{key:value}
        dataType: "json",
        beforeSend: function () {}, //请求发送前回调,常用验证
        success: function (response) { //请求成功回调
            domNode(response.data)

        },
        error: function (e) { //请求超时回调
            if (e.statusText == "timeout") {
                alert("请求超时");
            }
        },
        complete: function () {}, //无论请求是成功还是失败都会执行的回调，常用全局成员的释放，或者页面状态的重置
    });
})

$(document).on('click', '.del', function () {
    delName = $(this).parent().parent().children('td').eq(0).text()

})
$('.del2').click(function () {
    var data = {
        name: delName
    }
    $.ajax({
        type: "POST", //默认get
        url: "http://127.0.0.1:3000/items/del", //默认当前页
        data: data, //格式{key:value}
        dataType: "json",
        beforeSend: function () {}, //请求发送前回调,常用验证
        success: function (response) { //请求成功回调
            console.log(response)
            infoAll()
        },
        error: function (e) { //请求超时回调
            if (e.statusText == "timeout") {
                alert("请求超时");
            }
        },
        complete: function () {}, //无论请求是成功还是失败都会执行的回调，常用全局成员的释放，或者页面状态的重置
    });
})

$(document).on('click', '.update', function () {
    del = $(this).parent().parent().children('td').eq(0).text()

})

$('.update2').click(function () {
    var data = {
        name: del,
        hobby: $('.hobby1').val(),
        age: $('.age1').val(),
        sex: $('.sex1').val(),
        cla: $('.cla1').val()
    }
    console.log(data)
    $.ajax({
        type: "POST", //默认get
        url: "http://127.0.0.1:3000/items/update", //默认当前页
        data: data, //格式{key:value}
        dataType: "json",
        beforeSend: function () {}, //请求发送前回调,常用验证
        success: function (response) { //请求成功回调
            console.log(response)
            infoAll()
        },
        error: function (e) { //请求超时回调
            if (e.statusText == "timeout") {
                alert("请求超时");
            }
        },
        complete: function () {}, //无论请求是成功还是失败都会执行的回调，常用全局成员的释放，或者页面状态的重置
    });
})
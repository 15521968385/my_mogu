const express = require('express');
const mysql = require('mysql');

const app = express();

//跨域处理
app.all('*', function (req, res, next) {
    // console.log(req.method);
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Headers', 'Content-type');
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS,PATCH");
    res.header('Access-Control-Max-Age', 1728000);//预请求缓存20天
    next();
});

//数据库配置
const db = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'root',
    database: 'my_mogu',
    // 能同时请求多条sql
    multipleStatements: true
})

//连接数据库
db.connect(err => {
    if (err) throw err;
    console.log('mysql connected');
})


// 获取home页面的数据
app.get('/gethomedata', (req, res) => {
    let sqls = `select * from banner;
                select * from huodong_class;
                select * from class limit 0, 3;
                select * from goods where class_id=1;
                select * from goods where class_id=2;
                select * from goods where class_id=3`
    db.query(sqls, (err, result) => {
        if (err) throw err;
        let [bannerData, huodongClassTitle, classTitle, classOneData, classTwoData, classTreeData] = result;
        result = { bannerData, huodongClassTitle, classTitle, classOneData, classTwoData, classTreeData }
        res.send(result)
    })
})

//根据id获取banner-item数据
app.get('/getbanneritem/:id', (req, res) => {
    let sql = `select * from banner_item where banner_id=${req.params.id} `;
    db.query(sql, (err, result) => {
        if (err) throw err;
        // console.log(result);
        res.send(result)
    })
})

//  加入我喜欢，♥,并love_num+1
app.get('/dianxingcolor/:id', (req, res) => {
    //  问号一一对应ps数组元素
    let sql = `UPDATE goods SET love=?, love_num=? WHERE id = ${req.params.id};`;
    let ps = [req.query.love,req.query.love_num]

    db.query(sql, ps, (err, result) => {
        if (err) throw err;
        // console.log(result);
        res.send('修改成功')
    })
})

// 获取活动商品页面数据
app.get('/gethuodongdata', (req, res) => {
    let sql = `select * from huodong_class;
               select * from goods where huodong_id=1;
               select * from goods where huodong_id=2;
               select * from goods where huodong_id=3;
               select * from goods where huodong_id=4;
               select * from goods where huodong_id=5;
               select * from goods where huodong_id=6;
               select * from goods where huodong_id=7;
               select * from goods where huodong_id=8;`;
    db.query(sql, (err, result) => {
        if (err) throw err;
        let [huodongTitle,huodongOne,huoodngTwo,huodongThree,huodongFour,huodongFive,huodongSix,huodongSeven,huodongEight]=result
        result={
            huodongTitle,huodongOne,huoodngTwo,huodongThree,huodongFour,huodongFive,huodongSix,huodongSeven,huodongEight  
        }
        res.send(result)
    })
})

// 根据id获取一个商品的数据
app.get('/getgooddata/:id', (req, res) => {
    let sql = `select * from goods where id=${req.params.id};
               select * from good_banner where good_id=${req.params.id};
               select * from fuwu where good_id=${req.params.id};
               select * from yanse where good_id=${req.params.id};
               select * from chima where good_id=${req.params.id};
               select * from pinglun where good_id=${req.params.id}`;
    db.query(sql, (err, result) => {
        if (err) throw err;
        let [goodData,goodBanner,goodFuwu,goodYanse,goodChima,goodPinglun]=result
        result={
            goodData,goodBanner,goodFuwu,goodYanse,goodChima,goodPinglun
        }
        res.send(result)
    })
})

// 根据商品id获取评论
app.get('/getgoodpinglun/:goodid',(req,res)=>{
    let sql =` SELECT * FROM pinglun WHERE good_id=${req.params.goodid}`
    db.query(sql,(err,result)=>{
        if (err) throw err;
        
        res.send(result)
    })
})












//监听
app.listen('2000', () => {
    console.log('server started on port 2000')
})
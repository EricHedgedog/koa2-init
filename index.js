const Koa = require('koa')
const app = new Koa()
require('./models/user.js')
// var MongoClient = require('mongodb').MongoClient;
// var DB_CONN_STR = 'mongodb://localhost:27017/test'; // 数据库为 runoob
const mongoose = require('mongoose');
var User = mongoose.model('User')

mongoose.connect('mongodb://localhost:27017/test')

var db = mongoose.connection;
	db.on('error', console.error.bind(console, 'connection error:'));
	db.once('open', function (callback) {
	  // yay!
 	var silence = new User({ name: 'Silence' })
 	var eric = new User()
	console.log(silence.name) // 'Silence'
	silence.speak()
	eric.speak()
});


// var insertData = function(db, callback) {  
//     //连接到表 site
//     var collection = db.collection('site');
//     //插入数据
//     var data = [{"name":"菜鸟教程","url":"www.runoob.com"},{"name":"菜鸟工具","url":"c.runoob.com"}];
//     collection.insert(data, function(err, result) { 
//         if(err)
//         {
//             console.log('Error:'+ err);
//             return;
//         }     
//         callback(result);
//     });
// }
 
// MongoClient.connect(DB_CONN_STR, function(err, db) {
//     console.log("连接成功！");
//     insertData(db, function(result) {
//         console.log(result);
//         db.close();
//     });
// });


app.listen(3000, () => {
  console.log('[demo] request get is starting at port 3000')
})
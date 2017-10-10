const mongoose = require('mongoose')
const Schema = mongoose.Schema;



var kittySchema = new Schema({
    name: String
    accessToken: String,
	avatar: String,
})

kittySchema.methods.speak = function () {
  var greeting = this.name
    ? "Meow name is " + this.name
    : "I don't have a name"
  console.log(greeting);
}

// Defines a pre hook for the document.
// kittySchema.pre('save', function(next) {
//   if (this.isNew) {
//     this.meta.createAt = this.meta.updateAt = Date.now()
//   }
//   else {
//     this.meta.updateAt = Date.now()
//   }
//   next()
// })

/**
 * 定义模型User
 * 模型用来实现我们定义的模式，调用mongoose.model来编译Schema得到Model
 * @type {[type]}
 */
// 参数User 数据库中的集合名称, 不存在会创建.
var User = mongoose.model('User', kittySchema)

module.exports = User

/**
 * nodejs中文社区这篇帖子对mongoose的用法总结的不错：https://cnodejs.org/topic/548e54d157fd3ae46b233502
 */
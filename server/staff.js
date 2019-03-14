const express = require('express');
const router = express.Router();
const NodeRSA = require('node-rsa')
const fs = require('fs')
const mongoose = require('mongoose');
const encrytOption = { encryptionScheme: 'pkcs1' }
const { userSchema, bookSchema} =require('./schema')
const Userinfo = mongoose.model('user', userSchema);
const book= mongoose.model('book', bookSchema);
const  rNum= function (t) {
  return  parseInt(Math.random()*t)
}
/*const crawler = require('./DBcrawler')(book)  /!*爬虫数据*!/*/
const  RSAdecode = (data)=>{
  var key = new NodeRSA(global.pvKeys)
  key.setOptions(encrytOption )
  return key.decrypt(data,'utf8');
}
const  RSA_generator = ()=>{
  const key = new NodeRSA({b:512});
  key.setOptions(encrytOption )
  var privatePem = key.exportKey('pkcs1-private-pem')
  var publicPem = key.exportKey('pkcs1-public-pem')
  fs.writeFile('./pem/public.pem', publicPem, (err) => {
    if (err) throw err
    console.log('公钥已保存！')
  })
  fs.writeFile('./pem/private.pem', privatePem, (err) => {
    if (err) throw err
    console.log('私钥已保存！')
  })
}
const  isObjectId = (c) =>/^[a-fA-F0-9]{24}$/.test(c)
/*RSA_generator()  /*用于生成秘钥没事别执行~*/
router.get('/publicKeys', async (req,res,next)=>{
  res.send({keys:global.pbKeys})
})
router.post('/register',async (req,res,next)=>{
  let key = new NodeRSA(global.pbKeys);
  key.setOptions(encrytOption)
  const hasUserName = await Userinfo.findOne({username:req.body.username})
  if(hasUserName){
    res.send('存在相同用户名')
    return false
  }
  let u =  new Userinfo ({
    username:req.body.username,
    nikename:req.body.nikename,
    password:RSAdecode(req.body.password,'utf-8')
  })
  await  u.save()
  await  console.log('保存成功!',RSAdecode(req.body.password,'utf-8'),'password')
  res.send('注册成功 !')
//解密
  // 过滤规则
  //  判断数据库有没有这个数据
  //   将数据存在数据库  并且发送一条邮箱
  //   验证激活
})
router.post('/login',async (req,res,next)=>{
  let key = new NodeRSA(global.pbKeys);
  key.setOptions(encrytOption)
 const data =await Userinfo.findOne({username:req.body.username,password:RSAdecode(req.body.password,'utf-8')},{nikename:'$nikename'})
  if(data) {
    res.send(data)
  }else {
    res.send({error:true})
  }
  await  console.log(data)
})
router.post('/verifyEmail',async (req,res,next)=>{
  // 解密邮箱账号和验证码和时间
   // 判断token是否过期
  // 根据邮箱查找是否有这条数据
  // 有就给用户设定邮箱激活成功否则返回null
})
router.post('/forgetPassWord', async (req,res,next)=>{
  //获得邮箱地址
  //加密发送一条链接到用户邮箱
  //
})
router.post('/insertBook', async (req,res,next)=>{
  let  books = new book({
      bookid:parseInt(req.body.bookid),
      bookname: req.body.bookname,
      inventory :parseInt(req.body.inventory),
      describe:req.body.describe,
      price:parseInt(req.body.price),
      star:parseInt(req.body.star),
      author:req.body.author,
      preview:req.body.preview
  })
  const hasBooks= await book.findOne({bookid:parseInt(req.body.bookid)})
   console.log(hasBooks)
  if(!hasBooks){
    await  books.save()
    console.log('save successfully !')
    res.send('success!')
  }else {
    res.send('error')
    console.log(' error ')
  }

})
router.get('/booklist',async (req,res,next)=>{
   let  check= {bookid:parseInt(req.query.bookid)}
   let limit = req.query.limit||10
   let skip = (req.query.skip|| 0)*limit
  const result = await  book.find(check).limit(limit).skip(skip)
  if(result.length){
     res.send(result)
  }else {
    next()
  }
} )
router.post('/checkToken',async (req,res,next)=>{
 if(isObjectId(req.body.token)) {
   const data = await Userinfo.findOne({_id: req.body.token})
   console.log(data)
   if (data) {
     res.send(data)
   } else {
     res.send({error: true})
   }
 }
 else  {
    res.send({msg:'请输入正确id'})
 }
})
router.get('/homePageBooks', async (req,res,next)=>{
  let homePage=[]
  for(var i = 0 ; i<20;i++){
    homePage.push(rNum(100))
  }
  res.send({list_id:homePage})
})
router.get('/search',async (req,res,next)=>{
  let  e = new RegExp(req.query.name,'g')
  let  result=await  book.find({bookname:e})
  console.log(result)
  res.send(result)
})
module.exports = router;

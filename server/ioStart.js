const mongoose = require('mongoose');
const fs = require('fs')
const colors = require('colors');
const  databaseName = 'bookstore'
module.exports  = async  function (app,port) {
  console.time('Server startup takes time')
  await mongoose.connect('mongodb://localhost/wiseman',{useNewUrlParser: true},(err,data)=>{
    if (err) console.log('Database connection fairly ....'.red,err)
    if(data){
      console.log('Database Connection Success! '.bgGreen.white)
    }
  });
  console.log('Loading secret key...')
  global.pbKeys = await  fs.readFileSync('./pem/public.pem','utf-8')
  global.pvKeys = await  fs.readFileSync('./pem/private.pem','utf-8')
  console.log('Loading  success !'.bgGreen.white/*,global.pbKeys,global.pvKeys*/)
  let  server = require('http').Server(app)
  const mongooseConnect = await mongoose.connect('mongodb://localhost/'+databaseName,{useNewUrlParser: true},(err,data)=>{
    if (err) console.log(err)
    if(data){
      console.log('database connection!')
    }
  });  //链接数据库
  global.io = require('socket.io')(server)
  await  server.listen(port, () => console.log('Example app listening on port:'.bgBlue+(port.toString()).bgBlue))
  console.timeEnd('Server startup takes time')
  return global.io
}

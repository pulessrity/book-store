const mongoose = require('mongoose');
module.exports  = async  function (app,port) {
await mongoose.connect('mongodb://localhost/wiseman',{useNewUrlParser: true},(err,data)=>{
  if (err) console.log('数据库连接失败',err)
  if(data){
    console.log('数据库连接成功')
  }
});
let  server = require('http').Server(app)
let io = require('socket.io')(server)
await  server.listen(port, () => console.log('Example app listening on port 3000!'))
return io
}

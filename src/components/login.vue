<template>
  <div id="login">
      <el-tabs type="border-card"  v-model="activeName"  @tab-click="handleClick" >
      <el-tab-pane label="登录" class="pane" name="first">
        <el-input placeholder="请输入内容" v-model="username" class="input-with-select">
          <div slot="prepend" class="inw">用户名</div>
        </el-input>

        <el-input placeholder="请输入内容" v-model="password" class="input-with-select" type="password" style="margin-top: 20px">
          <div slot="prepend" class="inw">密   码</div>
        </el-input>
        <el-button type="danger" plain  style="margin-top: 10px;width: 100%" @click.enter="login">登录</el-button>
      </el-tab-pane>

      <el-tab-pane label="注册"  class="panex" name="second">
        <el-input placeholder="请输入内容" v-model="nikename" class="input-with-select">
          <div slot="prepend" class="inw">昵称</div>
        </el-input>
        <el-input placeholder="请输入内容" v-model="username" class="input-with-select">
          <div slot="prepend" class="inw">用户名</div>
        </el-input>

        <el-input placeholder="请输入内容" v-model="password" class="input-with-select" type="password" style="margin-top: 20px">
        <div slot="prepend" class="inw">密   码</div>
      </el-input>
        <el-input placeholder="请输入内容" v-model="re_password" class="input-with-select" type="password" style="margin-top: 20px">
          <div slot="prepend" class="inw">确认密码</div>
        </el-input>
        <el-button type="danger" plain  style="margin-top: 10px;width: 100%" @click.enter="register ">注册</el-button>
      </el-tab-pane>
          <el-button type="warning" style="background: #ff7bb3;width: 100%" icon="el-icon-error" @click="$emit('close')">关闭</el-button>
    </el-tabs>
  </div>
</template>

<script>
  import NodeRSA  from 'node-rsa'
    export default {
        name: "login",
       props:{isRegister:{type:Boolean,default:true}},
      created(){
        console.log( this.$store.state.user_info)
      },
      data(){
        return {
          input5:null,
          canvas:null,
          username:null,
          password: null,
          re_password:null,
          activeName: 'first',
          nikename:null
        }
      },
      methods :{
          handleClick(a,b){

          },
         async login (){
         console.log('login')
           const keys = new NodeRSA(this.$store.state.keys)
           keys.setOptions( { encryptionScheme: 'pkcs1' })
           const {data} =await this.$http.post('/login',{username:this.username.trim(),password:keys.encrypt(this.password,'base64')})
           console.log(data,this.$store.state)
           localStorage.Btoken=data._id
           console.log(localStorage.Btoken)
           this.$store.state.user_info=data
           this.$message({
             message: data?'登录成功!':'error!',
             type: data?'success':'error',
             center: true
           });
           this.$emit('close')
          },
         async register() {
          console.log('register')
          const keys = new NodeRSA(this.$store.state.keys)
          keys.setOptions( { encryptionScheme: 'pkcs1' })
          const {data} =await this.$http.post('/register',{nikename:this.nikename,username:this.username,password:keys.encrypt(this.password,'base64')})
          this.$message({
            message: data,
            type: data==='注册成功 !'?'success':'error',
            center: true
          });
        }
      }
    }
</script>



<style lang="scss" rel="stylesheet/scss" >
#login {
  position: fixed;
  width: 100%;
  height: 100%;
  background: #33333359;
  top:0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99999;
  flex-direction: column;
  .el-tabs--border-card>.el-tabs__content{
    background: yellow;
  }
  .el-input-group__append, .el-input-group__prepend{
    background: palevioletred;
  }
  .pane{
    width: 300px;
  }
  .inw{
    width: 50px;
    text-align: center;
    color:white;
  }
}

</style>

<template>
  <div id="app"  v-cloak>
    <transition name="el-zoom-in-center">
      <v-login v-if="$store.state.isLogin" @close="closeLogin"></v-login>
    </transition>
    <el-row type="flex" class="row-bg">
      <el-col :span="2" :offset="2"><router-link to="/home"><div class="grid-content bg-purple">TOKEN</div></router-link></el-col>
      <el-col :span="2"><router-link to="/"><div class="grid-content bg-purple">HOME</div></router-link></el-col>
      <el-col :span="2"><router-link to="/list?bookid=1"><div class="grid-content bg-purple-light">Shop List</div></router-link></el-col>
      <el-col :span="2"><router-link to="/shopcart"><div class="grid-content bg-purple">Single Product</div></router-link></el-col>
      <el-col :span="6" :offset="6">
        <div class="grid-content bg-purple" v-if="!$store.state.user_info">
          <el-button type="primary" icon="el-icon-search" @click="login">登录-注册</el-button>
        </div>
        <div v-else>
          {{$store.state.user_info.nikename}}
          <el-button type="primary" icon="el-icon-search" @click="loginDestroy" size="mini" style="margin-left: 10px">注销</el-button>
        </div>
      </el-col>
    </el-row>
    <transition name="fade"  mode="out-in">
    <router-view/>
    </transition>
  </div>
</template>

<script>
  import login from '@/components/login.vue'
export default {
  name: 'App',
  components:{
    'v-login':login
  },
  methods:{
    loginDestroy(){
      localStorage.Btoken=''
      this.$router.go(0)
    },
    login(){
      this.$store.state.isLogin=true
    },
    closeLogin(){
      this.$store.state.isLogin=false
    }
  },
  data(){
    return {

    }
  },
created () {
    this.commit=this.$store.commit
    this.$http.get('/publicKeys').then(({data})=>{
      this.commit('m',{keys:data.keys})
    })
    localStorage.Btoken&&this.$http.post('/checkToken',{token:localStorage.Btoken}).then(({data})=>{
      this.$store.state.user_info=data
      console.log('token 登录成功!')
      this.$message({
        message: data?'登录成功!':'error!',
        type: data?'success':'error',
        center: true
      });
  })
  }
}
</script>

<style>
  [v-cloak] {
    display: none;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
<style   lang="scss" rel="stylesheet/scss" >

  .gray-bg {
    background: #F6F6F6;
    height: 300px;
    display: flex;
    padding: 0 100px;
    margin-top: 50px;
  }

  .book-container {
    display: flex;
    padding: 0 20%;
  }

  .title {
    color: #333;
    display: block;
    font-size: 30px;
    font-weight: 700;
    line-height: 30px;
    margin-bottom: 20px;
  }

  .t2 {
    font-size: 15px;
    margin-bottom: 30px;
  }

  .row-bg {
    padding: 20px 0;
    font-size: 14px;
    font-weight: 600;
    color: #333;
    background: #F1F1F1;
    line-height: 40px;
  }

  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    text-decoration: none;
    color: rgba(64, 67, 59, 0.85);
  }

  a:hover {
    color: palevioletred;
  }

  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 500px;
    margin: 0;
  }

  .el-carousel__container {
    height: 500px;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }


</style>

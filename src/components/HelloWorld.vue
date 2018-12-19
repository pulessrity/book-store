<template>
  <div class="hello">
    <el-row type="flex" class="row-bg">
      <el-col :span="2" :offset="2"><router-link to="/home"><div class="grid-content bg-purple">TOKEN</div></router-link></el-col>
      <el-col :span="2"><router-link to="/home"><div class="grid-content bg-purple">HOME</div></router-link></el-col>
      <el-col :span="2"><router-link to="/home"><div class="grid-content bg-purple-light">Shop List</div></router-link></el-col>
      <el-col :span="2"><router-link to="/home"><div class="grid-content bg-purple">Single Product</div></router-link></el-col>
      <el-col :span="6" :offset="6"><div class="grid-content bg-purple">
        <el-button type="primary" icon="el-icon-search">登录</el-button>
        <el-button type="primary" icon="el-icon-search" style="margin-left: 0">注册</el-button>
      </div></el-col>
    </el-row>
    <el-carousel indicator-position="outside">
      <el-carousel-item v-for="item in items" :key="item">
        <img :src="item">
      </el-carousel-item>
    </el-carousel>
    <div class="title">NEW <span style="color: #e59285">PRODUCTS</span></div>
    <p class="t2">There are many variations of passages of Lorem Ipsum available, but the majority have suffered lebmid alteration in some ledmid form</p>

    <div  class="book-container">
      <v-book></v-book>
      <v-book></v-book>
      <v-book></v-book>
      <v-book></v-book>
    </div>
  </div>
</template>

<script>
  import  book from '@/components/books.vue'
export default {
  name: 'HelloWorld',
  components:{
    'v-book':book
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      items:["https://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-666480.jpg","https://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-121097.jpg",
        "https://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-135725.jpg","https://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-150348.jpg"
      ]
    }
  }
}
</script>
<style>
  .hello   .el-carousel__container{
    height: 500px;
    border-radius: 3px;
    overflow: hidden
  }
  @media screen and ( max-width: 980px ) {
.hello .el-col-2{
  display: none;
}
    .hello   .el-carousel__container{
      height: 200px;
    }
    .hello .el-col-offset-6{
      width: 100%;
    }
    .hello .book-container{
      display: flex!important;
      padding: 0!important;
      justify-content: center!important;
      align-items: center!important;
      flex-direction: column!important;
    }
  }
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello  .book-container{
    display: flex;
    padding: 0 20%;
  }
  .title{
    color: #333;
    display: block;
    font-size: 30px;
    font-weight: 700;
    line-height: 30px;
    margin-bottom: 20px;
  }
  .t2{
    font-size: 15px;
    margin-bottom: 30px;
  }
  .row-bg{
    padding: 20px 0;
    font-size: 14px;
    font-weight: 600;
    color: #333;
    background:#F1F1F1;
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
  a:hover{
    color: palevioletred;
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 500px;
    margin: 0;
  }
  .el-carousel__container{
    height: 500px;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>

<template>
  <div class="hello">
    <el-carousel indicator-position="outside">
      <el-carousel-item v-for="item in items" :key="item">
        <img :src="item">
      </el-carousel-item>
    </el-carousel>
    <div class="title">NEW <span style="color: #e59285">PRODUCTS</span></div>
    <p class="t2">There are many variations of passages of Lorem Ipsum available, but the majority have suffered lebmid alteration in some ledmid form</p>
    <div  class="book-container">
      <v-book :index_bg="'//wallpapers.wallhaven.cc/wallpapers/full/wallhaven-'+parseInt(Math.random()*100000)+'.jpg'" :faker_bg="'//wallpapers.wallhaven.cc/wallpapers/full/wallhaven-'+parseInt(Math.random()*100000)+'.jpg'"></v-book>
      <v-book :index_bg="'//wallpapers.wallhaven.cc/wallpapers/full/wallhaven-'+parseInt(Math.random()*100000)+'.jpg'" :faker_bg="'//wallpapers.wallhaven.cc/wallpapers/full/wallhaven-'+parseInt(Math.random()*100000)+'.jpg'"></v-book>
      <v-book :index_bg="'//wallpapers.wallhaven.cc/wallpapers/full/wallhaven-'+parseInt(Math.random()*100000)+'.jpg'" :faker_bg="'//wallpapers.wallhaven.cc/wallpapers/full/wallhaven-'+parseInt(Math.random()*100000)+'.jpg'"></v-book>
      <v-book :index_bg="'//wallpapers.wallhaven.cc/wallpapers/full/wallhaven-'+parseInt(Math.random()*100000)+'.jpg'" :faker_bg="'//wallpapers.wallhaven.cc/wallpapers/full/wallhaven-'+parseInt(Math.random()*100000)+'.jpg'"></v-book>
    </div>
    <div class="gray-bg">
      <div>

      </div>
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
  methods:{

  },
  data () {
    return {
      isLogin:false,
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


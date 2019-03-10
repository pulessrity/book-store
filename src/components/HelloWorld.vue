<template>
  <div class="hello">
    <el-carousel indicator-position="outside">
      <el-carousel-item v-for="item in items" :key="item">
        <img :src="item" style="height: 100%">
      </el-carousel-item>
    </el-carousel>
    <div class="title">NEW <span style="color: #e59285">PRODUCTS</span></div>
    <p class="t2">There are many variations of passages of Lorem Ipsum available, but the majority have suffered lebmid alteration in some ledmid form</p>
    <div  class="book-container" style="overflow: scroll;padding: 0 10%">
      <v-book :index_bg="'//wallpapers.wallhaven.cc/wallpapers/full/wallhaven-'+parseInt(Math.random()*100000)+'.jpg'" :faker_bg="'//wallpapers.wallhaven.cc/wallpapers/full/wallhaven-'+parseInt(Math.random()*100000)+'.jpg'" :books_id="numx" v-for="numx in homepage" :key="numx"></v-book>
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
  async created(){
 const  h = await this.$http.get('/homePageBooks')
    this.homepage=h.data.list_id
    console.log( this.homepage,'hhh')
  },
  components:{
    'v-book':book
  },
  methods:{

  },
  data () {
    return {
      isLogin:false,
      homepage:[9,5,6,7,8,15,17,19,25,18],
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
      overflow: scroll!important;
      justify-content: center!important;
      align-items: center!important;
      flex-direction: column!important;
    }
  }
</style>


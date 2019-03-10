<template>
    <div id='shopcart'>
      <div class="book" v-if="bookDate" v-for="(book,index) in bookDate" :key="index">
           <img :src="book.cover"  />
        <div > 书名:{{book.name}}</div>
        <div > 作者:{{book.authour}}</div>
        <div > 单价:{{book.price}}元</div>
        <div > 数量:{{book.count}}本</div>
        <div > 总价:{{book.all}}元</div>
        <div><el-button type="danger" icon="el-icon-error" @click="delShopCart(book._id)">删除</el-button></div>
      </div>
      <div class="cale">
        <div>共有物品&nbsp;&nbsp;{{bookDate.length}}&nbsp;&nbsp;件</div>
        <div >价格为:&nbsp;&nbsp; {{allCount}}&nbsp;&nbsp;元</div>
        <el-button>提交</el-button>
      </div>
    </div>
</template>
<script>
    export default {
        name: 'shopcart',
       async created (){
             this.psInit()
       },
      computed:{
      allCount(){
        var  a =0
        for( let  shop of this.bookDate){
         a+=shop.all
        }
        return a
      }
      },
      methods:{
       async psInit(){
         this.bookDate=[]
         const cart = JSON.parse(localStorage.shopping_cart)
/*         var af= null*/
       this.bookDate=cart
         console.log(this.bookDate)
        },
        delShopCart(id){
          let cart = JSON.parse(localStorage.shopping_cart)
          for(var i = 0 ;i<cart.length;i++){
            if(cart[i]._id==id){
               cart.splice(i,1)
            }
          }
          localStorage.shopping_cart=JSON.stringify(cart)
          this.psInit()
        }
      },
        data() {
          return {
              bookDate:[]
          }
        }
    }
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
    #shopcart {
      display: flex;
      .cale{
        width: 100%;
        height: 70px;
        background: #e66c6c;
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin-top: 50px;
        color: white;
        font-size: 20px;
      }
      flex-wrap: wrap;
          .book {
            margin-top: 10px;
            margin-left: 20px;
            background: #4c1a4a;
            color: white;
            border-radius: 20px;
            padding: 20px;
          }
      .book div{
        margin-top: 10px;
      }
         .book img{
           width: 150px;
           height: 200px;
         }
    }
</style>

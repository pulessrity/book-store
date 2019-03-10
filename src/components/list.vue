<template>
    <div id='list'>
      <div class="bg">
      <img :src='resdata.preview' class="img" v-if="resdata"/>
      </div>
      <div class="content" v-if="resdata">
        <h1>{{resdata.bookname}}</h1>
        <div >{{resdata.author}}</div>
        <div><el-rate
          v-model="resdata.star"
          disabled
          show-score
          text-color="#ff9900"
          score-template="{value}">
        </el-rate></div>
        <div>单价:{{resdata.price}}</div>
        <div>类别</div>
        <div><div class="gray colors" > </div><div class="yellow colors"> </div></div>
        <div>库存 :{{resdata.inventory}}</div>
        <div>  <el-input-number  :size="'small'" v-model="num1" @change="handleChange" :min="1" :max="resdata.inventory" label="描述文字"></el-input-number>
          <div>总价:{{num1*resdata.price}}</div>
         <el-button @click="addcart">加入购物车</el-button>
        </div>
        <div class="border"></div>
        <pre class="text" >{{resdata.describe}}
        </pre>
      </div>
    </div>
</template>
<script>
    export default {
        name: 'list',
       async created (){
       let id  =this.$route.query.bookid
      const { data } =  await this.$http.get('/booklist?bookid='+id)
        this.resdata=data[0]                                                                                                                                                                                                                                                                                                                                                                                                                                                
         console.log(data[0])
        },
        data() {
            return {
              value5:3.5,
              num1:1,
              resdata:null
            }
        },
      methods:{
        addcart(){
            let user_info =this.$store.state.user_info
            if(user_info){
              this.$store.state.isLogin =false
            }else {
              this.$store.state.isLogin =true
              return false
            }
        this.$store.commit('addcartAndSaving',{_id:this.$route.query.bookid,
          count:this.num1,
          cover:this.resdata.preview,
          all:this.num1*this.resdata.price,
          name:this.resdata.bookname,
          authour:this.resdata.author,
          price: this.resdata.price
        })
          this.$message({
            message: '添加购物车成功!',
            type: 'success'
          });
          },
        handleChange(){

        }
      }


    }
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
    #list {
      .bg{
        padding: 50px;
      }
          padding: 0  200px;
          background: #eff1d8;
          display: flex;
         font-size: 18px;
      .content{
        padding-left: 20px;
        padding-top: 50px;
        .text{
          width: 500px;
          white-space: pre-wrap;
          text-align: left;
          overflow: hidden;
          margin-top: 50px;
        }
        .border{
           border-bottom: 1px #ccc solid;
          width: 100%;
          margin-top: 10px;
        }
        .colors {
          width: 50px;
          height: 20px;
          display: inline-block;
          margin-left: 10px;
        }
        .gray{
          background: #ccc;
          margin: 0;
        }
        .yellow{
           background: yellow;
        }
        h1{
          text-align: left;
          margin-top: 5px;
        }
        div{
          text-align: left;
          margin-top: 5px;
        }
      }
      .img{
        width: 300px;
        border-radius: 5px;
      }
    }
</style>

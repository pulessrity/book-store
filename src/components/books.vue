<template>
  <div   class="book-regulator"  >
    <div class="books" @mouseenter.stop="add"  @mouseleave.stop="add" >
   <v-login></v-login>
      <span class="hot-word"  v-once>Hot</span>
      <transition name="component-fade" mode="out-in">
        <img :src="index_bg"  class="faker-img"  :key="0.145"  v-if="change_m"/>
     <img :src="faker_bg"  class="faker-img" :key="0.158" v-else/>
      </transition>
      <div class="font">
        <transition-group name="list" tag="p" >
    < <el-button :icon=" icon_arr[index].img" circle v-for="(item,index) in  items"  v-if="items.length!=0" :key="item" class="list-item" >
        </el-button>
        </transition-group>
      </div>
      <el-rate v-model="star_index" v-if="items.length!=0"   disabled
              ></el-rate>
      <ul class="prize d-flex" v-if="items.length==0">
        <li>$35.00</li>
        <li class="old_prize">$35.00</li>
      </ul>
    </div>
  </div>
</template>
<script>
  import  login  from  '@/components/login.vue'
    export default {
    components:{
      'v-login':login
    },
      props:{
        index_bg:{
          type: String,
          default: 'https://sjbz-fd.zol-img.com.cn/t_s320x510c/g5/M00/00/07/ChMkJ1vyri-IPwqHAAF8rsiLVfMAAtQGgPMZbEAAXzG361.jpg'
        },
        faker_bg:{
          type: String,
          default: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3814969672,2992789085&fm=26&gp=0.jpg'
        },
        icon_arr: {
          type:Array,
          default:()=>{
          return [{img:'el-icon-news',src:'#'},{img:'el-icon-message',src:'#'},{img:'el-icon-upload',src:'#'},{img:'el-icon-setting',src:'#'}]
          }

        },
        star_index: {
          type: Number,
          default:4
        },
      },
    data(){
      return {
        items:[],
        nextNum: 10,
        search_show:false,
        timer:null,
        time_index:0,
        change_m:true,
        shaking:true
      }
    },
      methods:{
        randomIndex: function () {
          return Math.floor(Math.random() * this.items.length)
        },
      add () {
        let that = this
        if (!this.shaking) {
          return false
        } else {
          clearInterval(that.timer)
          that.time_index = 0
          that.shaking = false
          if (this.items.length != 0) {
            console.log('remove')
            that.change_m=true
            this.timer = setInterval(function () {
              if (that.time_index > 3) {
                clearInterval(that.timer)
                that.shaking = true
              } else {
                that.time_index++
                that.items.splice(0, 1)
              }
            }, 100)
          } else {
            console.log('add')
            that.change_m=false
            this.timer = setInterval(function () {
              if (that.time_index > 3) {
                clearInterval(that.timer)
                that.shaking = true
              } else {
                that.time_index++
                that.items.splice(that.randomIndex(), 0, that.nextNum++)
              }
            }, 100)
          }


        }
      }
      }
    }
</script>
<style>
  .el-carousel__item:nth-child(2n) {
    background-color: #ffffff;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #ffffff;
  }
  .el-button.is-circle{
    padding: 5px;
  }
  .component-fade-enter-active, .component-fade-leave-active {
    transition: opacity .3s ease;
  }
  .component-fade-enter, .component-fade-leave-to
    /* .component-fade-leave-active for below version 2.1.8 */ {
    opacity: 0;
  }
  .list-item {
    display: inline-block;
    margin-right: 10px;
  }
  .list-enter-active, .list-leave-active {
    transition: all 0.1s;
  }
  .list-enter, .list-leave-to
    /* .list-leave-active for below version 2.1.8 */ {
    opacity: 0;
    transform: translateY(30px);
  }
</style>
<style scoped>
  .book-regulator{
    margin: 0 auto;padding: 20px;
    margin-bottom: 50px;
  }
  .hot-word{
    position: absolute;
    color: white;
    padding: 10px;
    border-radius: 2px;
    background: burlywood;
  }
  .books{
    width: 263px;
    height: 331px;
    background: #40433b;
   margin:  0 auto;
    border-radius:3px;
  }
  .font{
    font-size: 16px;
    font-weight: 500;
    color: #333;
    margin-bottom: 10px;
  }
  .faker-img{
    width: 100%;
   height: 100%;
    object-fit: cover;
    border-radius: 3px;
  }
  .d-flex{
   display: flex;
    justify-content: center;
  }
  li{
    color: #ce7852;
    font-size: 14px;
    margin-right: 15px;
  }
  .old_prize{
    color: #7d7d7d;
    text-decoration: line-through;
  }
  .faker-img:hover{

  }
</style>

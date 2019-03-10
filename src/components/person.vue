<template>
    <div id="person">
        <canvas id="main" width="400" height="200"></canvas>
        <img src="@/assets/tx.jpg" class="avatar"   style=""/>
      <img src="#" class="shadow"   style="display: none"/>
        <canvas id="photo" width="100" height="100" style="display: none"></canvas>
    </div>
</template>

<script>
    export default {
        name: "person",
        created(){

        },
      mounted(){
         this.canvasInitPic()
       },
      data(){
        return {
          imagesArr:[],
          start_index:1,
          mainCtx:'',
          test:1,
          questD:1
        }
      },
      methods:{
        canvasInitPic(){
          let that = this
          let mainCtx =document.getElementById('main').getContext("2d")
          that.mainCtx=document.getElementById('main').getContext("2d")
          let photoCtx =document.getElementById('photo').getContext("2d")
          let avatar =document.getElementsByClassName('avatar')[0]
          let shadow =document.getElementsByClassName('shadow')[0]
          shadow.src=avatar.src
          shadow.onload=function(){
            console.log('开始获取图片数据....')
             photoCtx.drawImage(shadow, 0,0,this.width,this.height,0,0,100,100);
             let imagesData =  photoCtx.getImageData(0,0,100,100)
            console.log('获取成功',that.$typeOf(imagesData.data),imagesData)
            console.time('开始')
            for ( let i=0;i<imagesData.data.length;i+=4){
                 let arr=imagesData.data
                 let obj={
                   x:(parseInt(i/4)%100)+1,
                   y:(parseInt(i/400))+1,
                   color:JSON.stringify({
                     r:arr[i],
                     g:arr[i+1],
                     b:arr[i+2],
                     a:(arr[i+3]/255).toFixed(2)
                   })
                 }
               that.imagesArr.push(obj)
             }
             that.victory()
      /*      that.imagesArr.forEach(function (xi) {
               that.createRect(mainCtx)(xi.x,xi.y,1,1,xi.color,150,50,xi)
             })
             console.log(that.imagesArr)*/
             console.timeEnd('结束')
           }
          return {
            mainCtx,
            photoCtx
          }
        },
        createRect(ctx){
          var that = this
         return function (x,y,w,h,color,offsetX,offsetY,gold) {
           let rgba = `rgba (${color.r},${color.g},${color.b},${color.a})`
           ctx.fillRect(offsetX+x, offsetY+y, w, h);
           ctx.fillStyle=rgba;
         }
        },
        victory(){
          var that = this
          that.mainCtx.clearRect(0,0,400,300)
          that.imagesArr.forEach(function (xi) {
            var colos ={
              r:parseInt(Math.random()*255),
              g:parseInt(Math.random()*255),
              b:parseInt(Math.random()*255),
              a:1
            }
         that.createRect(that.mainCtx)(xi.x,xi.y,1,1,colos,0,0,xi.colos)
       })
        },
        running(){
          let that  = this
          this.questD=requestAnimationFrame(function () {
             that.victory()
             that.running()
          })
        }
      }
    }
</script>

<style  lang="scss" rel="stylesheet/scss" scoped>
#person{
  width: 400px;
  height: 600px;
  background: #475669;
  position: absolute;
  z-index: 999;
  right: 10%;
  margin-top: -20px;
  border-radius: 20px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: white;
  background:url("../assets/bz.jpeg") no-repeat;
  background-size: 100%;
  box-shadow: 1px 1px 10px 0 #f0ff9cb8;
  flex-direction: column;
  overflow: hidden;
  .avatar{
    width: 100px;
    height: 100px;
    background: #8c939d;
    border-radius: 50%;
    border: 1px #cccccc solid;
    margin-top: -150px;
    z-index: 999;
  }
  #main{
    width: 100%;
    background: #475669;
  }
  #photo{
    background: #ef2061;
    border-radius: 5px;
    overflow: hidden;
  }

}
</style>

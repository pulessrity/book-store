<template>
  <div id="details">
    <div class=''>

    </div>

  </div>
</template>

<script>
  import  book from '@/components/books.vue'
    export default {
      components:{
        'v-book':book
      },

    }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  #details {
    padding: 0 10%;
    .blackboard{
      border-bottom: 1px #979797 solid;
      height: 25px;
      width: 100%;
      background: white;
      text-align: center;
      line-height: 25px;
    }
    .grayb{
      border-bottom:1px #475669  dashed;
    }
    .aside-flex{
      display: flex;
      border-bottom: 1px black solid;
      flex-direction: column;
    }







    .el-header, .el-footer {
      background-color: #B3C0D1;
      color: #333;
      text-align: center;
      line-height: 60px;
    }

    .el-aside {
      background-color: #D3DCE6;
      color: #333;
      text-align: center;
      line-height: 200px;
    }

    .el-main {
      background-color: #E9EEF3;
      color: #333;
      text-align: center;
      line-height: 160px;
    }

    body > .el-container {
      margin-bottom: 40px;
    }

    .el-container:nth-child(5) .el-aside,
    .el-container:nth-child(6) .el-aside {
      line-height: 260px;
    }

    .el-container:nth-child(7) .el-aside {
      line-height: 320px;
    }
  }

</style>

<template>
  <div id="login">
    <div v-if="isRegister" >'注册'</div>
    <div v-else>'登录'</div>
  </div>
</template>

<script>
    export default {
        name: "login",
         props:{isRegister:{type:Boolean,default:true}}
    }
</script>

<style scoped>

</style>

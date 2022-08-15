<template>
<div class="header">
  <div class="header-content">
    <div v-for="item in routerArr" :key="item.name" class="header-route">{{item.name}}</div>
  </div>
</div>
</template>
<script>
import {} from 'vue'
import { routerArr } from './other-static-data'
  export default{
    name:'app-header',
    setup(){
      return {
        routerArr
      }
    }
  }
</script>
<style lang="scss">
  @import '@/css/component/header.scss';
  
</style>
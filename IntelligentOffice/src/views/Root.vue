<template>
  <div class="root">
    <div class="headers clearfix">
      <div class="logo">我是logo</div>
      <ul class="head_tab clearfix">
        <router-link tag="li" to='/root'>首页</router-link>
        <router-link tag="li" to='/staff'>人员管理</router-link>
        <router-link tag="li" to='/address'>地理信息</router-link>
        <router-link tag="li" to='/device'>设备管理</router-link>
        <router-link tag="li" to='/feature'>功能管理</router-link>
        <router-link tag="li" to='/system'>系统设置</router-link>
      </ul>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  }
}
</script>

<style lang="less">
  .root{
    width: 100%;
    min-height: 100%;
    background: #E7E9FE;
    .headers {
      width: 100%;
      position: fixed;
      left: 0;
      top: 0;
      height: 80px;
      border-bottom: 1px solid #E7E9FE;
      background: #fff;
      .logo{
        width: 15%;
        float: left;
        // background: #ccc;
        height: 100%;
      }
      .head_tab{
        float: left;
        color: rgba(25,31,37,.85);
        font-size: 18px;
        line-height: 80px;
        text-align: center;
        li{
          float: left;
          width: 120px;
          cursor: pointer;
        }
      }
    }
    .router-link-active{
      color: #5863ED;
      font-weight: bold;
    }
  }
</style>

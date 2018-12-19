<template>
  <div class="root">
    <div class="headers clearfix">
      <div class="logo clearfix" @click="backHome">
        <div class="logo_pic">
          <img src="../assets/img/biglogo.png" alt="">
        </div>
        <div class="logo_text">智能办公系统</div>
      </div>
      <ul class="head_tab clearfix">
        <!-- <router-link tag="li" to='/root'>首页</router-link> -->
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
  },
  methods: {
    backHome () {
      this.$router.push('/root')
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
        height: 100%;
        // min-width: 280px;
        .logo_pic{
          width: 28px;
          height: 28px;
          margin-left: 40px;
          float: left;
          margin-top: 25px;
          img{
            width: 100%;
            height: 100%;
          }
        }
        .logo_text{
          float: left;
          line-height: 80px;
          color:rgba(25,31,37,0.85);
          font-size: 24px;
          font-weight: bold;
          margin-left: 8px;
        }
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

<template>
  <div class="login">
    <div class="loginBtn" @click="loginBtn">点击登录</div>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  methods: {
    loginBtn () {
      this.$router.push('/root')
    }
  }
}
</script>

<style lang="less">
  .loginBtn {
    font-size: 30px;
    text-align: center;
    padding-top: 100px;
  }
</style>

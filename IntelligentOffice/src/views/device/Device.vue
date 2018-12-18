<template>
  <div class="device">
    <div class="sidebar">
      <div class="side_logo"></div>
      <div class="side_title">杭州控客智享科技有限公司</div>
    </div>
    <div class="main">
      设备  
    </div>
  </div>
</template>

<style lang="less">
  .device{
    width: 100%;
    height: 100vh;
    .sidebar{
      float: left;
      min-height: 100%;
      width: 15%;
      background: #fff;
      padding-top: 80px;
      .side_logo{
        width: 60px;
        height: 60px;
        margin: 30px auto 0;
        background: #ccc;
      }
      .side_title{
        font-weight:bold;
        color:rgba(25,31,37,0.85);
        font-size:18px;
        margin-top: 10px;
        text-align: center;
        margin-bottom: 40px;
      }
    }
    .main{
      float: left;
      width: 83%;
      height: 88%;
      background: #fff;
      margin-left: 20px;
      margin-top: 100px;
    }
  }
</style>

<template>
  <div class="staff">
    <div class="sidebar">
      <div class="side_logo">
        <img src="../../assets/img/logo.png" alt="">
      </div>
      <div class="side_title">杭州控客智享科技有限公司</div>
    </div>
    <div class="main">
      <div class="title clearfix">
        <span>杭州控客智享科技有限公司</span>
        <span class="set_btn">设置</span>
      </div>
      <div class="junior_dep clearfix">
        <div class="dep_icon">
          <img src="../../assets/img/depIcon.png" alt="">
        </div>
        <div class="dep_name">下级部门</div>
        <div class="dep_btn" @click="addDep">添加子部门</div>
      </div>
    </div>
    <transition name="slide-fade">
      <div class="add_dep" v-if="depShow">
        <p class="add_slide_title">添加部门</p>
        <p class="add_nav">部门信息</p>
        <div class="add_ipt">
          <span class="add_label">
            <i style="color:#FB5757;">*</i>
            部门名称：
          </span>
          <el-input class="add_inputs" v-model="input" placeholder="请输入部门名称"></el-input>
        </div>
        <div class="add_ipt">
          <span class="add_label">
            上级部门：
          </span>
          <el-input class="add_inputs" v-model="input" placeholder="请输入内容"></el-input>
        </div>
      </div>
    </transition>
    <transition name="fade">
      <div class="mask" @click="closeMask" v-if="maskShow"></div>
    </transition>
  </div>
</template>

<script>
export default {
  data () {
    return {
      depShow: true,
      maskShow: true,
      input: ''
    }
  },
  methods: {
    // 点击添加子部门
    addDep () {
      this.depShow = true
      this.maskShow = true
    },
    // 点击遮罩层关闭
    closeMask () {
      this.depShow = false
      this.maskShow = false
    }
  }
}
</script>

<style lang="less">
  .staff{
    width: 100%;
    height: 100vh;
    .sidebar{
      float: left;
      min-height: 100%;
      width: 15%;
      background: #fff;
      padding-top: 80px;
      // min-width: 280px;
      .side_logo{
        width: 60px;
        height: 60px;
        margin: 30px auto 0;
        background: #ccc;
        img{
          width: 100%;
          height: 100%;
        }
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
      padding: 0 40px;
      .title{
        color:rgba(25,31,37,0.85);
        font-size: 22px;
        margin: 34px 0 30px 0;
        span{
          float: left;
        }
        .set_btn{
          margin-left: 19px;
          width: 80px;
          height: 30px;
          line-height: 28px;
          font-size: 13px;
          color:rgba(25,31,37,0.85);
          text-align: center;
          border-radius: 4px;
          border:1px solid rgba(25, 31, 37, 0.2);
          cursor: pointer;
        }
      }
      .junior_dep{
        padding-bottom: 14px;
        border-bottom: 1px solid #E8E8E8;
        .dep_icon{
          width: 24px;
          height: 20px;
          float: left;
          margin-top: 3px;
          img{
            width: 100%;
            height: 100%;
          }
        }
        .dep_name{
          float: left;
          font-size: 16px;
          color:rgba(25,31,37,0.85);
          margin: 3px 15px 0 5px;
        }
        .dep_btn{
          float: left;
          width: 100px;
          height: 30px;
          line-height: 28px;
          font-size: 13px;
          border:1px solid rgba(25, 31, 37, 0.2);
          border-radius: 4px;
          color:rgba(25,31,37, 0.85);
          text-align: center;
          cursor: pointer;
        }
      }
    }
    .add_dep{
      color: rgba(25,31,37,0.85);
      position: fixed;
      right: 0;
      top: 0;
      width: 500px;
      background: #ccc;
      height: 100%;
      background:rgba(255,255,255,1);
      box-shadow:-4px 0px 12px 0px rgba(203,201,201,0.52);
      z-index: 11;
      .add_slide_title{
        width: 100%;
        height: 80px;
        line-height: 80px;
        padding-left: 40px;
        font-size: 20px;
        font-weight: bold;
        color: rgba(25,31,37,0.85);
        border: 1px solid rgba(232,232,232,1);
      }
      .add_nav{
        width: 420px;
        background: #F1F2FF;
        height: 40px;
        line-height: 40px;
        margin: 40px auto 20px;
        padding-left: 20px;
        line-height: 40px;
        color: rgba(25,31,37,0.85);
        font-size: 14px;
      }
      .add_ipt{
        padding: 0 60px;
        height: 40px;
        line-height: 40px;
        margin-bottom: 20px;
        .add_label{
          float: left;
          font-size: 14px;
          text-align: right;
          width: 80px;
        }
        .add_inputs{
          float: left;
          width: 280px;
          height: 100%;
        }
      }
    }
    .mask{
      width: 100%;
      height: 100%;
      position: fixed;
      background: rgba(0,0,0,.5);
    }
    .slide-fade-enter-active {
      transition: all .3s ease;
    }
    .slide-fade-leave-active {
      transition: all .3s ease;
    }
    .slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active for below version 2.1.8 */ {
      transform: translateX(500px);
    }
    .fade-enter-active, .fade-leave-active {
      transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
      opacity: 0;
    }
  }
</style>

<template>
  <div class="login">
    <div class="header">
      <div class="header_top lf">
        <div class="back" @click="$router.back()">
          <i class="iconfont icon-fanhui"></i>
        </div>
        <div @click="goto('/register')">注册</div>
      </div>
      <div class="header_bottom lf">
        <div class="login_way" @click="setLoginWay(true)">
          <div>普通登录</div>
          <div class="icon" :class="{on:loginWay}"><i class="iconfont icon-sanjioa"></i></div>
        </div>
        <div class="login_way" @click="setLoginWay(false)">
          <div>手机动态密码登录</div>
          <div class="icon" :class="{on:!loginWay}"><i class="iconfont icon-sanjioa"></i></div>
        </div>
      </div>
    </div>
    <div class="info">
      <form class="formBox" @submit.prevent="login">
        <div class="pwdLogin" :class="{on:loginWay}">
          <div class="name text">
            <span><img src="./img/ren.png"></span>
            <input type="text" placeholder="手机号/邮箱/用户名">
          </div>
          <div class="password text">
            <span><img src="./img/suo.png"></span>
            <input type="password" placeholder="输入密码">
          </div>
        </div>
        <div class="msgLogin" :class="{on:!loginWay}">
          <div class="text phone">
            <span><img src="./img/phone.png"></span>
            <input type="text" placeholder="已注册的手机号">
          </div>
          <div class="text">
            <span><img src="./img/suo.png"></span>
            <input type="text" placeholder="请输入图片内容">
          </div>
          <div class="text">
            <span><img src="./img/suo.png"></span>
            <input type="text" placeholder="动态密码">
          </div>
        </div>
        <div class="forgetPwd"><a href="javascript:;">忘记密码？</a></div>
        <div class="login_btn"><input type="submit" value="登   录"></div>
      </form>
    </div>
    <div class="other_login">
      <div class="title">合作网站登录</div >
      <div class="icon">
        <span><img src="./img/login_ico1.png"></span>
        <span><img src="./img/login_ico2.png"></span>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    data () {
      return {
        loginWay: true, // true代表密码登陆, false短信验证码登陆
      }
    },
    methods: {
      goto (path) {
        // 跳转到指定路径
        this.$router.push(path)
      },

      setLoginWay (loginWay) {
        this.loginWay = loginWay
      }

    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .login
    width 100%
    height 100%
    background-color #ffffff
    position relative
    .header
      width 100%
      height 180px
      background url("./img/bg.png") no-repeat
      background-size 100% 100%
      display flex
      flex-direction column
      justify-content space-between
      .lf
        display flex
        justify-content space-between
        color #fff
        &.header_top
          height 50px
          line-height 50px
          font-size 16px
          padding 0 0.5em
          .back
            >i
              font-size 20px
        &.header_bottom
          height 44px
          font-size 15px
          background-color rgba(255,255,255,0.3)
          line-height 44px
          .login_way
            width 50%
            text-align center
            position relative
            .icon
              display none
              position absolute
              top 17px
              left 0
              right 0
              &.on
                display block
              >i
                color #fff
                font-size 22px


    .info
      .formBox
        margin 0 4% 1em
        padding 0 1.6%
        .pwdLogin
          display none
          .text
            height 46px
            line-height 46px
            border-bottom #e2e2e2 solid 1px
            >span
              display inline-block
              width 17px
              height 21px
              margin auto 5px
              >img
                display block
                width 100%
                margin-top 4px
            >input
              font-size 15px
              color #666
              font-family "Microsoft Yahei",tahoma,arial
              height 21px
              outline none
              &::-webkit-input-placeholder
                color #e2e2e2

          &.on
            display block
        .msgLogin
          display none
          &.on
            display block
          .text
            height 46px
            line-height 46px
            border-bottom #e2e2e2 solid 1px
            >span
              display inline-block
              width 17px
              height 21px
              margin auto 5px
              >img
                display block
                width 100%
                margin-top 3px
            >input
              font-size 15px
              color #666
              font-family "Microsoft Yahei",tahoma,arial
              height 21px
              outline none
              &::-webkit-input-placeholder
                color #e2e2e2
          .phone
            >span
              >img
                width 14px
        .login_btn
          >input
            width 100%
            background-color #2ec975
            color #ffffff
            height 38px
            border-radius 5px
            outline none
            &:active
              background -webkit-gradient(linear, left top, left bottom, from(#f7d781), to(#ffc428))
        .forgetPwd
          >a
            display block
            text-align right
            margin 10px auto
            color #898989
            font-size 14px
    .other_login
      position absolute
      bottom 150px
      left 0
      right 0
      .title
        text-align center
        color #b5b5b5
        font-size 16px
        margin 20px auto
      .icon
        text-align center
        >span
          margin 20px
          >img
            width 50px
</style>

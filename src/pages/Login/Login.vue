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
            <input type="text" placeholder="手机号/邮箱/用户名" v-model="name">
          </div>
          <div class="password text">
            <span><img src="./img/suo.png"></span>
            <input type="password" placeholder="输入密码" v-model="pwd">
          </div>
        </div>
        <div class="msgLogin" :class="{on:!loginWay}">
          <div class="text phone">
            <span><img src="./img/phone.png"></span>
            <input type="text" maxlength="11" placeholder="已注册的手机号" v-model="phone">
          </div>
          <div class="text ">
            <span><img src="./img/suo.png"></span>
            <input type="text" placeholder="请输入图片内容" v-model="captcha">
            <div class="imageCode" >
              <img src="https://wap.epet.com/share/seccode.html?hash=5157&height=30&width=85" @click="changeCaptcha">
            </div>
          </div>
          <div class="text">
            <span><img src="./img/suo.png"></span>
            <input type="text" placeholder="动态密码" v-model="code">
            <div class="numCode" :class="{right_phone: rightPhone}" v-show="!computeTime" @click.prevent="getCode">获取动态密码</div>
            <div class="numCode" :class="{right_phone: rightPhone}" v-show="computeTime">{{computeTime}}s</div>
          </div>
        </div>
        <div class="forgetPwd"><a href="javascript:;">忘记密码？</a></div>
        <div class="login_btn"><input type="submit" value="登   录"></div>
      </form>
    </div>
    <alert-tip v-if="alertShow" :alertText="alertText" @closeTip="closeTip"/>
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
  import { sendCode, smsLogin, pwdLogin} from '../../api'
  import { MessageBox } from 'mint-ui'
  import AlertTip from '../../components/AlertTip/AlertTip.vue'
  export default{
    data () {
      return {
        loginWay: true, // true代表密码登陆, false短信验证码登陆
        name: '', // 用户名
        pwd: '', // 密码
        phone: '', // 手机号
        code: '', //短信验证码
        captcha: '', // 图片验证码
        computeTime: 0, // 计时时间
        alertText: '', // 提示框文本
        alertShow: false, //是否显示提示框

      }
    },
    computed: {
      rightPhone () {// 以1开头的11数字
        return /^1\d{10}$/.test(this.phone)
      }
    },
    methods: {
      goto (path) {
        // 跳转到指定路径
        this.$router.push(path)
      },

      setLoginWay (loginWay) {
        this.loginWay = loginWay
      },

      // 获取图片验证码
      changeCaptcha () {
        event.target.src = 'https://wap.epet.com/share/seccode.html?hash=5157&height=30&width=85& time=' + new Date()
      },

      async getCode () {
        if (this.rightPhone) { // 输入了合法的手机号
          // 开始倒计时
          this.computeTime = 60
          // 启动循环定时器, 每隔1s减少1
          const intervalId = setInterval(() => {
            this.computeTime--
            //如果到时, 停止计时
            if (this.computeTime === 0) {
              clearInterval(intervalId)
            }
          }, 1000)

          // 发ajax请求, 向手机号发验证码
          const result = await sendCode(this.phone)
          if (result.code === 1) {
            clearInterval(intervalId)
            // 显示提示框
            this.alertShow = true
            this.alertText = result.msg
          }
        }

      },

      // 登陆
      async login () {
        let result
        if(this.loginWay) { // 短信登陆
          const {name, pwd} = this
          // 表单验证
          if(!name) { // 用户名
            this.alertShow = true
            this.alertText = '请输入用户名'
            return
          } else if(!/^\d{6}$/.test(code)) { // 验证码
            this.alertShow = true
            this.alertText = '请输入正确的验证码'
            return
          } else if(!captcha) { // 图片验证码
            this.alertShow = true
            this.alertText = '请输入正确的验证码'
            return
          }
          // 提交登陆请求
          result = await pwdLogin({name, pwd, captcha})

          // 处理返回

        } else {// 密码登陆
          const {rightPhone, phone, code,captcha} = this
          // 表单验证
          if(!rightPhone) { // 手机号
            this.alertShow = true
            this.alertText = '请输入正确的手机号'
            return
          } else if(!pwd) { // 密码
            this.alertShow = true
            this.alertText = '请输入密码'
            return
          }
          // 提交登陆请求
          result = await smsLogin({phone, code})

          // 处理返回
        }

        if(result.code===0) {
          // 得到用户信息
          const userInfo = result.data
          // 保存到state中去
          this.$store.dispatch('recordUserInfo', userInfo)
          // 回退
          this.$router.back()
        } else {
          this.alertShow = true
          this.alertText = result.msg
        }
      },

      // 关闭提示框
      closeTip () {
        this.alertShow = false
      }

    },
    components: {
      AlertTip
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
            position relative
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
            .imageCode
              position absolute
              top 7px
              right 0
              width 85px
              height 30px
            .numCode
              position absolute
              top 7px
              right 0
              width 100px
              height 30px
              border-radius 3px
              line-height 30px
              text-align center
              font-size 12px
              color #FF0000
              border 1px solid #FF0000
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

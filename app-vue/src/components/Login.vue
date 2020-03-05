<template>
  <div class="login-bg">
    <div class="login">
      <p class="logo mb10">
        <img src="@/assets/logo.png" alt="">
        <span>Vskit CMS</span>
      </p>
      <div class="mb10 pr20 pl20 tc lh60">
        <div class="w60Percent lh60 inline-block">
          <el-input class="lh60 inline-block vt" v-model="username" size="small" placeholder="Username"></el-input>
        </div>
      </div>

      <div class="mb10 pr20 pl20 tc lh60">
        <div class="w60Percent lh60 inline-block">
          <el-input class="lh60 inline-block vt" placeholder="Password" size="small" v-model="password" show-password></el-input>
        </div>
      </div>

      <div class="mb10 pr20 pl20 tc lh60">
        <div class="w60Percent lh60 inline-block">
          <el-button class="w100Percent lh60" size="small" type="primary" @click="loginOprate">登录</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      // Vadmin
      username: '',
      // VsKiT201803#
      password: ''
    }
  },
  created() {
    // this.loginOprate();
  },
  methods: {
    async loginOprate () {
      let options = {
        username: this.username,
        password: this.password
      };
      if (!this.username || !this.password) {
        this.$message.error('Please enter the complete user name and password');
        return false;
      }
      let data = await this.$Api.getLoginData(options);
			console.log(data)
			if (data.code === 0) {
				const _data = data.data;
        this.$cookie.set('token', _data.token);
        
        let loginData = {};
        loginData.UserName = this.username;
        this.username = '';
        this.password = '';
        this.$store.commit(this.Constant.SET_LOGIN_DATA, loginData);
        this.$router.push({ name: 'home' });
        this.$store.dispatch(this.Constant.GET_ALL_COUNTRY_ASYNC);
        this.$store.dispatch(this.Constant.GET_ALL_VERSION_ASYNC);
				// window.$messageBox({message: '登陆成功'});
			}
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .login-bg {
    width: 100%;
    height: 100%;
    background: url('../assets/bg.jpg') center center no-repeat;
  }
  .login {
    position: fixed;
    z-index: 99;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    padding-top: 50px;
    width: 80%;
    height: 400px;
    margin: auto;
    border-radius: 0 40px 0 40px;
    background: rgba(0, 0, 0, 0.2);
  }
  .logo {
    height: 80px;
    text-align: center;
    font-size: 0;
    img {
      display: inline-block;
      width: 80px;
      height: 80px;
      vertical-align: middle;
    }
    span {
      margin-left: 20px;
      display: inline-block;
      height: 80px;
      line-height: 80px;
      background-image: linear-gradient(135deg, deeppink, dodgerblue);
      -webkit-background-clip: text;
      -moz-background-clip: text;
      background-clip: text;
      box-decoration-break: clone;
      -webkit-box-decoration-break: clone;
      -moz-box-decoration-break: clone;
      color: transparent;
      position:relative;
      // color: #fff;
      // color: -webkit-linear-gradient(left,#d135f1, #219ffd);
      // color: -moz-linear-gradient(left,#d135f1, #219ffd);
      font-size: 32px;
      font-weight: bold;
      vertical-align: middle;
    }
  }
</style>
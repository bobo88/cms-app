<template>
  <div class="login">
    <p class="logo mb10">
      <img src="@/assets/logo.png" alt="">
    </p>
    <div class="mb10 pr20 pl20 tc lh60">
      <span class="f20 pr10 inline-block lh60 w100 vm">用户名</span>
      <div class="w300 lh60 inline-block vm">
        <el-input class="lh60 inline-block vt" v-model="username" size="small" placeholder="Username"></el-input>
      </div>
    </div>

    <div class="mb10 pr20 pl20 tc lh60">
      <span class="f20 pr10 inline-block lh60 w100 vm">密码</span>
      <div class="w300 lh60 inline-block vm">
        <el-input class="lh60 inline-block vt" placeholder="Password" size="small" v-model="password" show-password></el-input>
      </div>
    </div>

    <div class="mb10 pr20 pl20 tc lh60">
      <div class="w400 lh60 inline-block">
        <el-button class="w100Percent" size="small" type="primary" @click="loginOprate">登录</el-button>
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
  .login {
    position: fixed;
    z-index: 99;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 500px;
    margin: auto;
  }
  .logo {
    height: 80px;
    text-align: center;
    img {
      display: inline-block;
      width: 80px;
      height: 80px;
    }
  }
</style>
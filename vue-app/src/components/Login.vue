<template>
  <div class="login">
    xxx
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      // xx
    }
  },
  created() {
    this.loginTest();
  },
  methods: {
    async loginTest () {
      let options = {"username":"Vadmin","password":"VsKiT201803#"};
      let data = await this.$Api.getLoginData(options);
			console.log(data)
			if (data.code === 0) {
				const _data = data.data;
				this.$cookie.set('token', _data.token);
				window.$messageBox({message: '登陆成功'});
			}
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- <style src='../assets/styles/home.scss' lang="scss" scoped></style> -->
<style scoped>

</style>
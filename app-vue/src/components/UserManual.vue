<template>
  <div class="user-manual">
   	<el-dialog
      center
      title="User Manual"
      :visible.sync="dialogVisible"  :before-close='closeOparete'
      width="80%">
      <div class="user-manuals-content f24">
        <h3>Login page:</h3>
        <p class="mb20"><img src="@/assets/img/user_manual_1.jpeg" width="100%" alt=""></p>
        <h3>To be reviewed:</h3>
        <p><img src="@/assets/img/user_manual_2.jpeg" width="100%" alt=""></p>
        <p><img src="@/assets/img/user_manual_3.jpeg" width="100%" alt=""></p>
        <p><img src="@/assets/img/user_manual_4.jpeg" width="100%" alt=""></p>
        <p><img src="@/assets/img/user_manual_5.jpeg" width="100%" alt=""></p>
        <p><img src="@/assets/img/user_manual_6.jpeg" width="100%" alt=""></p>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
	name: 'user-manual',
	created () {
    // xx
  },
  data () {
    return {
	    dialogVisible: false
    }
  },
  mounted() {},
  methods: {
    show () {
      this.dialogVisible = true;
    },
    // 取消操作
    closeOparete () {
      this.dialogVisible = false;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  h3 {
    margin-bottom: 10px;
    height: 40px;
    line-height: 40px;
    font-size: 24px;
    color: #ed265d;
  }
</style>
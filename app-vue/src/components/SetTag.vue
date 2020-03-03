<template>
  <div class="set-tag">
   	<el-dialog
			title="提示"
			:visible.sync="dialogVisible"
			width="30%"
			:before-close="handleClose">
			<span>这是一段信息</span>
			<span slot="footer" class="dialog-footer">
				<el-button @click="dialogVisible = false">取 消</el-button>
				<el-button type="primary" @click="dialogVisible = false">确 定</el-button>
			</span>
		</el-dialog>
  </div>
</template>

<script>
export default {
	name: 'set-tag',
	props: ['dataItem'],
  data () {
    return {
      dialogVisible: false
    }
  },
  created() {
    // this.dialogVisible = this.dataVisible;
  },
  methods: {
		show () {
			this.dialogVisible = true;
		},
		hide () {},
		handleClose () {}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  
</style>
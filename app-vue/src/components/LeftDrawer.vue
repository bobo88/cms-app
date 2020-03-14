<template>
  <div class="left-drawer">
    <el-drawer
      class="drawer-box"
      :visible.sync="drawer"
      :direction="direction">
      <!-- 导航栏 -->
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo f24"
        @open="handleOpen"
        @close="handleClose">
        <!-- <el-submenu index="1">
          <template slot="title">
            <span>导航一</span>
          </template>
          <el-menu-item-group>
            <template slot="title">分组一</template>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="1-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="1-4">
            <template slot="title">选项4</template>
            <el-menu-item index="1-4-1">选项1</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="2">
          <span slot="title">导航二</span>
        </el-menu-item>
        <el-menu-item index="3" disabled>
          <span slot="title">导航三</span>
        </el-menu-item> -->
        <el-menu-item index="3">
          <span slot="title" @click="refresh">Refresh</span>
        </el-menu-item>
        <el-menu-item index="4">
          <span slot="title" @click="showUserManualTc">User manual</span>
        </el-menu-item>
        <!-- <el-menu-item index="4">
          <span slot="title">
            <el-button class="f24" type="text" size="small" @click="changeLanguage">
              <span :class="{'currentLang': $i18n.locale ==='en'}">English</span>
               / 
              <span :class="{'currentLang': $i18n.locale ==='zh'}">简体中文</span>
            </el-button>
          </span>
        </el-menu-item> -->
        <el-menu-item index="5">
          <!-- <i class="el-icon-setting"></i> -->
          <span slot="title" @click="loginOutOprate">Logout</span>
        </el-menu-item>
      </el-menu>
    </el-drawer>

    <!-- UserManual -->
    <user-manual ref="userManualRef"></user-manual>
  </div>
</template>

<script>
import UserManual from '@/components/UserManual.vue'
export default {
  name: 'left-drawer',
  props: ['dataVisible'],
  components: {
    UserManual
  },
  data () {
    return {
      drawer: false,
      direction: 'rtl'
    }
  },
  created() {
    // this.loginOprate();
  },
  methods: {
    // changeLanguage () {
    //   if (this.$i18n.locale === 'en') {
    //     this.$i18n.locale = 'zh';
    //     localStorage.setItem('language', 'zh');
    //   } else {
    //     this.$i18n.locale = 'en';
    //     localStorage.setItem('language', 'en');
    //   }
    // },
    refresh () {
      this.$emit('cbRefresh');
      this.drawer = false;
    },
    showUserManualTc () {
      this.$refs.userManualRef.show();
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    show () {
      this.drawer = true;
    },
    async loginOutOprate () {
      this.$Api.getLoginOutData({}, {
        headers: {
          'x-auth-token': this.$store.getters[this.Constant.GET_USER_TOKEN]
        }
      }).then(data => {
        if (parseInt(data.code) === 0) {
          // 退出登录后，删除cookie，跳转到登录页面
          this.$store.commit(this.Constant.DELETE_LOGIN_DATA)
          // this.$message.success('退出登录成功！');
          this.$router.push({
            name: 'login',
             'params': { 'urlType': 0}
            })
        } else {
          this.$message.error(data.desc);
        }
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .currentLang {
    color: #000;
    font-weight: bold;
  }
</style>
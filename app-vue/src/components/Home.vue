<template>
  <div class="home">
    <video-player  class="video-player-box"
       ref="videoPlayer"
       :options="playerOptions"
       :playsinline="true"
       customEventName="customstatechangedeventname"
       @play="onPlayerPlay($event)"
       @pause="onPlayerPause($event)"
       @statechanged="playerStateChanged($event)"
       @ready="playerReadied">
       <!-- @ended="onPlayerEnded($event)"
          @waiting="onPlayerWaiting($event)"
          @playing="onPlayerPlaying($event)"
          @loadeddata="onPlayerLoadeddata($event)"
          @timeupdate="onPlayerTimeupdate($event)"
          @canplay="onPlayerCanplay($event)"
          @canplaythrough="onPlayerCanplaythrough($event)" -->
    </video-player>

    <div class="bottom-box">
      <el-row :gutter="20">
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <span class="el-icon-refresh icon-item inline-block f60"></span>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <span class="el-icon-circle-check icon-item inline-block f60"></span>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <span class="el-icon-circle-close icon-item inline-block f60"></span>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple" @click="loginOutOprate">
            <span class="el-icon-right icon-item inline-block f60"></span>
          </div>
        </el-col>
      </el-row>
      
      <!-- <div class="w300 lh60 inline-block"> -->
        <!-- <el-button class="w100Percent vt" size="small" type="primary" @click="loginOutOprate">退出登录</el-button> -->
      <!-- </div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      playerOptions: {
        autoplay: true,
        loop: true,
        // videojs options
        muted: false,
        language: 'en',
        playbackRates: [0.7, 1.0, 1.5, 2.0],
        sources: [{
          type: 'video/mp4',
          src: 'https://cdn.palm-chat.com/V/9e3669a2-5c80-4f3e-a4c7-c60f67f3d2ca_z.mp4'
        }],
        poster: '/static/images/author.jpg',
        controlBar: {
          timeDivider: true,
          durationDisplay: true,
          remainingTimeDisplay: false,
          fullscreenToggle: true
        }
      },
      prevItem: '',
      nextItem: ''
    }
  },
  created() {
    // this.loginTest();
    this.getReviewVideoListData();
  },
  computed: {
    player () {
      return this.$refs.videoPlayer.player
    }
  },
  methods: {
    async getReviewVideoListData () {
      let options = {"pageIndex":1,"pageSize":10,"recommend":0,"startTime":0,"endTime":0,"id":0,"vskitId":"","videoId":"","musicId":"","activityId":"","videoStatus":2};
      let data = await this.$Api.getReviewVideoListData(options);
      console.log(data)
      this.$message.success('获取列表成功！');
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
          this.$message.success('退出登录成功！');
          this.$router.push({
            name: 'login',
             'params': { 'urlType': 0}
            })
        } else {
          this.$message.error(data.desc);
        }
      });
      // let options = {"username":"Vadmin","password":"VsKiT201803#"};
      // let data = await this.$Api.getLoginOutData(options);
      // console.log(data)
    },
    // listen event
    onPlayerPlay (player) {
      // console.log('player play!', player)
    },
    onPlayerPause (player) {
      // console.log('player pause!', player)
    },
    // ...player event
    // or listen state event
    playerStateChanged (playerCurrentState) {
      // console.log('player current update state', playerCurrentState)
    },

    // player is ready
    playerReadied (player) {
      console.log('the player is readied', player)
      // you can use it to do something...
      // player.[methods]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- <style src='../assets/styles/home.scss' lang="scss" scoped></style> -->
<style lang="scss" scoped>
  .home{
    width: 100% !important;
    height: 100% !important;
  }
  .bottom-box {
    position: fixed;
    z-index: 9999;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 90px;
    padding: 15px 0;
    line-height: 60px;
    background: #2e324b;
    .icon-item {
      display: inline-block;
      width: 100%;
      color: #fff;
      text-align: center;
    }
  }
</style>
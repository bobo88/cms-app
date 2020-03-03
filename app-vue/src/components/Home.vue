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

    <div class="video-info">
      <img :src="currentVideoItem.avatarUrl" class="avatar" alt="">
      <div class="info-cont inline-block">
        <div class="tag-box">
          <div v-if="currentVideoItem.labelTitles && currentVideoItem.labelTitles.length > 0">
            <span class="el-icon-s-flag vm"></span>
            <marquee-text class="inline-block vm">
              {{ currentVideoItem.labelTitles.join(', ') }}
            </marquee-text>
          </div>
          
          <!-- <el-tag v-if="currentVideoItem.categoryTitle">{{ currentVideoItem.categoryTitle }}</el-tag> -->
          <!-- <el-tag v-if="currentVideoItem.secondTagsStr">{{ currentVideoItem.secondTagsStr }}</el-tag> -->
          <!-- <el-tag v-if="currentVideoItem.labelTitles">{{ currentVideoItem.labelTitles }}</el-tag> -->
        </div>
        <p class="user-name" :class="{'userType-1': currentVideoItem.userType === 1}">
          <span v-if="currentVideoItem.whiteType === 1" class="isWhiteUser el-icon-star-on"></span>
          @{{ currentVideoItem.name }} 
        </p>
        <div class="video-title">
          <el-tag effect="dark" v-if="currentVideoItem.categoryTitle" class="mr10">1. {{currentVideoItem.categoryTitle}}</el-tag>
          <el-tag effect="dark" v-if="currentVideoItem.secondTagsStr" class="mr10" type="success">2. {{currentVideoItem.secondTagsStr}}</el-tag>
          {{ currentVideoItem.title }}
        </div>
      </div>
    </div>
    
    <div class="bottom-box">
      <el-row :gutter="20">
        <!-- <el-col :span="6">
          <div class="grid-content bg-purple" @click="refreshData">
            <span class="el-icon-refresh icon-item inline-block f60"></span>
          </div>
        </el-col> -->
        <el-col :span="6">
          <div class="grid-content bg-purple" @click="setTag">
            <span class="el-icon-s-flag icon-item inline-block f60"></span>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple" @click="passed">
            <span class="el-icon-circle-check icon-item inline-block f60"></span>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple" @click="noPassed">
            <span class="el-icon-circle-close icon-item inline-block f60"></span>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple" @click="loginOutOprate">
            <span class="el-icon-right icon-item inline-block f60"></span>
          </div>
        </el-col>
      </el-row>
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
        sources: [
          // {
          //   type: 'video/mp4',
          //   src: 'https://cdn.palm-chat.com/V/9e3669a2-5c80-4f3e-a4c7-c60f67f3d2ca_z.mp4'
          // }
        ],
        poster: '/static/images/author.jpg',
        controlBar: {
          timeDivider: true,
          durationDisplay: true,
          remainingTimeDisplay: false,
          fullscreenToggle: true
        }
      },
      videoList: [],
      currentVideoIndex: 0,
      currentVideoItem: {}
    }
  },
  created() {
    // this.loginTest();
    this.getReviewVideoListData();
  },
  computed: {
    // this.$refs.videoPlayer.player.play();
    // this.$refs.videoPlayer.player.pause();
    player () {
      return this.$refs.videoPlayer.player
    }
  },
  methods: {
    async getReviewVideoListData () {
      let options = {"pageIndex":1,"pageSize":50,"recommend":0,"startTime":0,"endTime":0,"id":0,"vskitId":"","videoId":"","musicId":"","activityId":"","videoStatus":2};
      let data = await this.$Api.getReviewVideoListData(options);
      console.log(data)
      if (data.code === 0) {
        this.videoList = data.data.dataList;
        // 视频初始化
        this.videoInit(0);
        this.$message.success('获取列表成功！');
      } else {
        this.$message.error('获取列表失败！');
      }
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
    // 初始化视频，默认展示数据列表第一个视频
    videoInit (index) {
      this.playerOptions.sources = [{
        type: 'video/mp4',
        src: this.videoList[index].videoUrl
      }];
      this.currentVideoItem = Object.assign({}, this.videoList[index]);
    },
    // 刷新视频列表数据
    refreshData () {
      this.currentVideoIndex = 0;
      this.getReviewVideoListData();
    },
    // 设置标签
    setTag () {

    },
    // 下一个视频（审核通过或者不通过）
    nextVideo () {
      if (this.currentVideoIndex < this.videoList.length - 1) {
        this.currentVideoIndex ++;
        this.videoInit(this.currentVideoIndex);
      } else {
        this.refreshData();
      }
    },
    // 审核通过
    passed () {
      this.oprateFun(0);
    },
    // 审核不通过
    async noPassed () {
      let videoId = this.currentVideoItem.videoId;
      let callback = await this.$confirm(
       '确认删除当前视频？',
        '',
        {
          confirmButtonText: 'Yes',
          cancelButtonText: 'No',
          type: 'warning',
          center: true
        }
      );
      if (callback) {
        let data = await this.$Api.deleteVideo([videoId]);
        console.log(data)
        if (data.code === 0) {
          this.nextVideo();
        } else {
          this.$message.error('删除当前视频失败！');
        }
      }
      // this.oprateFun(1);
    },
    // 审核 通过 / 不通过
    oprateFun (type) {
      if (this.currentVideoIndex < this.videoList.length - 1) {
        type === 0 ? this.$message.success('审核通过') : this.$message.error('审核不通过');
        this.currentVideoIndex ++;
        this.videoInit(this.currentVideoIndex);
      } else {
        // this.$message.error('当前视频是最后一个视频，请点击刷新按钮进行数据更新！');
        this.refreshData();
      }
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
    padding-bottom: 90px;
    width: 100% !important;
    height: 100% !important;
  }
  .video-info {
    position: fixed;
    z-index: 9999;
    bottom: 90px;
    left: 0;
    padding: 10px 20px;
    width: 100%;
    height: 150px;
    background: rgba(0, 0, 0, 0.1);
    .avatar {
      position: absolute;
      z-index: 3;
      left: 20px;
      top: 35px;
      display: inline-block;
      width: 90px;
      height: 90px;
      border-radius: 50%;
      vertical-align: top;
      background: #eee;
    }
    .info-cont {
      padding: 5px 20px 5px 110px;
      width: 100%;
      .tag-box, .user-name, .video-title {
        width: 100%;
      }
      .tag-box {
        height: 40px;
        line-height: 40px;
        color: #409EFF;
        font-size: 24px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        .el-icon-s-flag {
          font-size: 24px;
        }
      }
      .user-name {
        height: 40px;
        line-height: 40px;
        color: #fff;
        font-size: 28px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        &.userType-1 {
          color: #ff0 !important;
        }
        .isWhiteUser {
          display: inline-block;
          height: 40px;
          line-height: 40px;
          color: #f00 !important;
          font-size: 36px;
          vertical-align: middle;
        }
      }
      .video-title {
        height: 40px;
        line-height: 40px;
        color: #fff;
        font-size: 24px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      
    }
  }
  .el-footer-box {
    height: 90px !important;
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
    background: #292152;
    .icon-item {
      display: inline-block;
      width: 100%;
      color: #fff;
      text-align: center;
    }
  }
</style>
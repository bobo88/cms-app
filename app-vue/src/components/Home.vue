<template>
  <div class="home" v-loading.fullscreen.lock="fullscreenLoading">
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
        <!-- 标签 -->
        <div class="tag-box">
          <div v-if="currentVideoItem.labelTitles && currentVideoItem.labelTitles.length > 0">
            <span class="el-icon-s-flag vm"></span>
            <marquee-text class="inline-block vm">
              {{currentVideoItem.labelTitles.join(', ')}}
            </marquee-text>
          </div>
        </div>
        <p class="user-name" :class="{'userType-1': currentVideoItem.userType === 1}">
          <span v-if="currentVideoItem.whiteType === 1" class="isWhiteUser el-icon-star-on"></span>
          @{{ currentVideoItem.name }} 
        </p>
        <div class="video-title">
          <el-tag effect="dark" v-if="currentVideoItem.categoryTitle" class="mr10 tag-item">1. {{currentVideoItem.categoryTitle}}</el-tag>
          <el-tag effect="dark" v-if="currentVideoItem.secondTagsStr" class="mr10 tag-item" type="success">2. {{currentVideoItem.secondTagsStr}}</el-tag>
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
            <span class="el-icon-s-flag icon-item inline-block"></span>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple" @click="passed">
            <span class="el-icon-circle-check icon-item inline-block"></span>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple" @click="noPassed">
            <span class="el-icon-circle-close icon-item inline-block"></span>
          </div>
        </el-col>
        <!-- <el-col :span="6">
          <div class="grid-content bg-purple" @click="loginOutOprate">
            <span class="el-icon-right icon-item inline-block"></span>
          </div>
        </el-col> -->
        <el-col :span="6">
          <div class="grid-content bg-purple" @click="showLeftDrawer">
            <span class="el-icon-setting icon-item inline-block"></span>
          </div>
        </el-col>
      </el-row>
    </div>

    <el-dialog title="Do you recommend video?" :visible.sync="centerDialogVisible" width="70%" center>
      <div class="tc">
        <el-button class="tc-box-btn-mr30" size="small" type="danger" @click="handleRecommend">Recommend</el-button>
        <el-button size="small" type="primary" @click="handleNoRecommend">Not Recommend</el-button>
      </div>
    </el-dialog>

    <el-dialog title="Delete current video?" :visible.sync="centerDeleteDialogVisible" width="70%" center>
      <div class="tc">
        <el-button class="tc-box-btn-mr30" size="small" @click="centerDeleteDialogVisible = false">No</el-button>
        <el-button size="small" type="danger" @click="deleteOprate">Yes</el-button>
      </div>
    </el-dialog>

    <!-- 设置标签 -->
    <set-tag ref="setTagRef" :data-tags="currentVideoTagsData" @cb="setTagsCb"></set-tag>
    <!-- 左侧栏 -->
    <left-drawer ref="leftDrawerRef" @cbRefresh="refreshOprate"></left-drawer>
  </div>
</template>

<script>
import SetTag from '@/components/SetTag.vue'
import LeftDrawer from '@/components/LeftDrawer.vue'
export default {
  name: 'home',
  components: {
    SetTag,
    LeftDrawer
  },
  data () {
    return {
      fullscreenLoading: false,
      centerDialogVisible: false,
      centerDeleteDialogVisible: false,
      rowVideoId: '',
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
      currentVideoItem: {},
      currentVideoTagsData: {}
    }
  },
  created() {
    // this.loginTest();
    this.fullscreenLoading = true;
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
      this.fullscreenLoading = false;
      if (data.code === 0) {
        this.videoList = data.data.dataList;
        // 视频初始化
        this.videoInit(0);
        // this.$message.success('获取列表成功！');
      } else {
        this.$message.error('Failed to get the list!');
      }
    },
    showLeftDrawer () {
      this.$refs.leftDrawerRef.show();
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
      this.fullscreenLoading = true;
      this.currentVideoIndex = 0;
      this.getReviewVideoListData();
    },
    // 设置标签
    setTag () {
      // 注意： categoryId是为了区分 < 首次设置标签 > 还是 < 更新标签 >
      // console.log(55, this.currentVideoItem)
      let { videoId, userId, videoStatus, title, categoryId, categoryTitle, createdTime, scopeArea, labelIds } = this.currentVideoItem;
      this.currentVideoTagsData = {
        visible: true,
        videoId,
        userId,
        videoStatus,
        title,
        categoryId,
        categoryTitle,
        createdTime,
        scopeArea,
        labelIds
      };
      // this.$refs.setTagRef.show();
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
    // -------------------- 审核操作 ------------------------------
    async ajaxPassVideo (options) {
      let data = await this.$Api.passVideo(options);
      if (parseInt(data.code) === 0 || parseInt(data.code) === 200) {
        this.$message({
          type: 'success',
          message: 'Successful Operation'
        });
        this.nextVideo();
      } else {
        if (parseInt(data.code) === 210110) {
          this.$message.error('Resource error!');
        }
      }
    },
    // Ajax请求： 审核通过 保存审核用户
    ajaxSaveVideoApproveUser (options) {
      this.$Api.saveVideoUserApproveData(options)
        .then();
    },
    // 审核通过
    passed () {
      this.centerDialogVisible = true;
      this.rowVideoId = this.currentVideoItem.videoId;
    },
    handleRecommend () {
      this.ajaxPassVideo([{
        recommend: 1,
        videoId: this.rowVideoId
      }]);
      this.ajaxSaveVideoApproveUser({
        videoId: this.rowVideoId,
        // 审核操作类型 1: 仅审核 2: 审核以及推荐 3: 审核删除
        type: 2
      });
      this.centerDialogVisible = false;
    },
    handleNoRecommend () {
      this.ajaxPassVideo([{
        recommend: 0,
        videoId: this.rowVideoId
      }]);
      this.ajaxSaveVideoApproveUser({
        videoId: this.rowVideoId,
        type: 1 // 1 仅审核
      });
      this.centerDialogVisible = false;
    },
    // 审核不通过
    noPassed () {
      this.centerDeleteDialogVisible = true;
    },
    // 删除视频
    async deleteOprate () {
      let videoId = this.currentVideoItem.videoId;
      let data = await this.$Api.deleteVideo([videoId]);
      console.log(data)
      this.centerDeleteDialogVisible = false;
      if (data.code === 0) {
        this.$message({
          type: 'success',
          message: 'Successful Operation'
        });
        this.nextVideo();
      } else {
        this.$message.error('Operation failed');
      }
    },
    // 设置标签后 的回调函数
    setTagsCb (options) {
      let { categoryId, title, tags, scopeArea, selectAllTag, labelIds } = options;
      this.currentVideoItem.categoryTitle = title;
      this.currentVideoItem.categoryId = categoryId;
      this.currentVideoItem.secondTagsStr = tags;
      this.currentVideoItem.scopeArea = scopeArea;
      this.currentVideoItem.labelTitles = selectAllTag;
      this.currentVideoItem.labelIds = labelIds;
    },
    // 刷新当前列表
    refreshOprate () {
      this.refreshData();
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
    z-index: 99;
    bottom: 120px;
    left: 0;
    padding: 10px 20px;
    width: 100%;
    height: 150px;
    // background: rgba(0, 0, 0, 0.1);
    background: -webkit-linear-gradient(bottom, rgba(0, 0, 0, 0.5), rgba(255, 255, 255, 0));
    background: -moz-linear-gradient(bottom, rgba(0, 0, 0, 0.5), rgba(255, 255, 255, 0));
    .avatar {
      position: absolute;
      z-index: 3;
      left: 20px;
      top: 35px;
      display: inline-block;
      width: 90px;
      height: 90px;
      border: none;
      border-radius: 50%;
      vertical-align: top;
      background: #ccc;
      overflow: hidden;
    }
    .info-cont {
      padding: 5px 20px 5px 110px;
      width: 100%;
      .tag-box, .user-name, .video-title {
        width: 100%;
      }
      .tag-box {
        position: relative;
        z-index: 1;
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
        .swiper-box {
          height: 40px;
          line-height: 40px;
          vertical-align: middle;
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
        vertical-align: middle;
        .tag-item {
          height: 40px;
          line-height: 40px;
          max-width: 150px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          vertical-align: middle;
        }
      }
      
    }
  }
  .el-footer-box {
    height: 120px !important;
  }
  .bottom-box {
    position: fixed;
    z-index: 99;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 120px;
    padding: 20px 0 40px;
    line-height: 60px;
    // background: #1a1b20;
    background: -webkit-linear-gradient(left,#1f1f35, #2a1a39);
    background: -moz-linear-gradient(left,#1f1f35, #2a1a39);
    .icon-item {
      display: inline-block;
      width: 100%;
      color: #979797;
      font-size: 48px;
      text-align: center;
    }
  }
  .tc-box-btn-mr30 {
    margin-right: 30px !important;
  }
</style>
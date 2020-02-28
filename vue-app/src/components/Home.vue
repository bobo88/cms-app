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
    this.loginTest();
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
      window.$messageBox({message: '获取列表成功！'});
    },
    async loginTest () {
      let options = {"username":"Vadmin","password":"VsKiT201803#"};
      let data = await this.$Api.getLoginData(options);
      console.log(data)
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
<style scoped>
  .home{
    width: 100% !important;
    height: 100% !important;
  }
</style>
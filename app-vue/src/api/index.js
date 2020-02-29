import {post, get} from './ajax'

export default {
  // ================================================================================
  /**
   * 后台管理登录
   * @param {}
   */
  getLoginData (options) {
    return post('/prevApi/login/vskit-cms-shiro-server', options)
  },
  /**
   * 后台管理退出登录
   * @param {}
   */
  getLoginOutData (options) {
    return post('game/user/logOut', options)
  },

  // --------------------------------------- 公用接口 ------------------------------------------------------
  // /**
  //  * 基础服务 --- 广告类型列表
  //  */
  // adTypes (options) {
  //   return post('game/baseService/adTypes', options)
  // },
  // ------------------------------ 广告配置 ---------------------------------
  /**
   * 首页 - 获取视频审核列表
   */
  getReviewVideoListData (options) {
    return post('/prevApi/api/vskit-cms-shiro-server/video/getlist', options)
  }
}

import {post, get} from './ajax'

export default {
  // ================================================================================
  /**
   * 后台管理登录
   * @param {}
   */
  getLoginData (options) {
    return post('/login/vskit-cms-shiro-server', options)
  },
  /**
   * 后台管理退出登录
   * @param {}
   */
  getLoginOutData (options) {
    return post('/logout/vskit-cms-shiro-server', options)
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
    return post('/api/vskit-cms-shiro-server/video/getlist', options)
  },
  /**
   * 内容管理 - 内容草稿库 - 内容审核 - 删除
   * @return {[type]} [description]
   */
  deleteVideo (options) {
    return post('/api/vskit-cms-shiro-server/review/delete', options)
  },
  /**
   * 内容管理 - 内容草稿库 - 内容审核 - 审核通过
   * @return {[type]} [description]
   */
  passVideo (options) {
    return post('/api/vskit-cms-shiro-server/review/pass', options)
  },
  /**
   * 内容管理 - 内容草稿库 - 内容审核 - 保存审核视频的用户
   * @param {}
   */
  saveVideoUserApproveData (options) {
    return get('/api/vskit-cms-shiro-server/video/approve/user/save', options);
  },
  getAllCountry () {
    return get('/api/country/all');
  },
  // ************************ 版本管理 *******************************
  getVersionInfoListData(options) {
    return post('/api/app/version/list', options);
  },
  getVersionInfoAllData(options) {
    return post('/api/app/version/all', options);
  }
}

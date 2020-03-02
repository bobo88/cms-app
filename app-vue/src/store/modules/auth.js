import constant from '../../constant'
import cookie from '../../core/cookie'

/**
 * 认证模块
 */
const moduleAuth = {
  state: {
    isLogin: false,
    bodyHight: 'auto',
    user: { // 用户登录信息
      UserName: ''
    },
    falseWhiteUserList: ['123', '456']
  },
  getters: {
    [constant.GET_IS_LOGIN]: state => {
      return state.isLogin;
    },
    [constant.FALSE_WHITE_USER_DATA]: state => {
      return state.falseWhiteUserList;
    }
  },
  mutations: {
    [constant.GET_LOGIN_DATA]: state => {
      let userUserName = cookie.get(constant.LOGIN_DATA_USERNAME);
      state.user.UserName = userUserName || state.user.UserName || '';
    },
    [constant.SET_IS_LOGIN] (state, isLogin) {
      state.isLogin = isLogin;
    },
    [constant.SET_LOGIN_DATA] (state, user) {
      state.user = user;
      user.UserName ? state.isLogin = true && cookie.set(constant.LOGIN_DATA_USERNAME, user.UserName) : '';
    },
    [constant.DELETE_LOGIN_DATA] (state) {
      state.isLogin = false;
      cookie.remove(constant.LOGIN_DATA_USERNAME);
    },
    bodyHight (state, bodyHight) {
      state.bodyHight = bodyHight
    }
  }
}
export default moduleAuth

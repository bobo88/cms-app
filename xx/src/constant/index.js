// 全局常量

export default {
  // api请求时返回数据的排序依据
  /**
   * ================================================================================
   * 路由信息
   * ================================================================================
   */
  GET_IS_LOGIN_PAGE: 'GET_IS_LOGIN_PAGE', // 获取当前页面的类型:是否为认证页
  SET_IS_LOGIN_PAGE: 'SET_IS_LOGIN_PAGE', // 设置当前页面的类型:是否为认证页
  GET_IS_NOT_FOUND_PAGE: 'GET_IS_NOT_FOUND_PAGE', // 获取当前页面的类型:是否为404页
  SET_IS_NOT_FOUND_PAGE: 'SET_IS_NOT_FOUND_PAGE', // 设置当前页面的类型:是否为404页
  GET_IS_CONTAINER_PAGE: 'GET_IS_CONTAINER_PAGE', // 为正常的显示页面

  /**
   * ================================================================================
   * 用户认证信息
   * ================================================================================
   */
  GET_IS_LOGIN: 'GET_IS_LOGIN', // 获取用户认证状态（此处只保证用户曾登录过）
  SET_IS_LOGIN: 'SET_IS_LOGIN', // 设置用户认证状态
  GET_LOGIN_DATA: 'GET_LOGIN_DATA', // 获取用户认证数据
  SET_LOGIN_DATA: 'SET_LOGIN_DATA', // 设置用户认证数据
  DELETE_LOGIN_DATA: 'DELETE_LOGIN_DATA', // 清空用户认证数据

  /**
   * ================================================================================
   * 用户个人信息
   * ================================================================================
   */
  GET_USER_DATA: 'GET_USER_DATA', // 获取用户个人数据
  SET_USER_DATA: 'GET_USER_DATA', // 获取用户个人数据
  GET_USER_TYPE: 'GET_USER_TYPE',
  GET_USER_TOKEN: 'GET_USER_TOKEN',
  GET_USERNAME: 'GET_USERNAME',
  /**
   * ================================================================================
   * 存入 cookie 信息
   * ================================================================================
   */
  LOGIN_DATA_USERNAME: 'userName',
  LOGIN_DATA_USERTYPE: 'userType',
  LOGIN_DATA_USERTOKEN: 'userToken',
  /**
   * ================================================================================
   * 存入 公共数据
   * ================================================================================
   */
  GET_ALL_COUNTRY: 'GET_ALL_COUNTRY',
  GET_ALL_COUNTRY_ASYNC: 'GET_ALL_COUNTRY_ASYNC',
  GET_ALL_VERSION: 'GET_ALL_COUNTRY',
  GET_ALL_VERSION_ASYNC: 'GET_ALL_VERSION_ASYNC'
}


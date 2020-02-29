/**
 *  网络请求底层封装：用于定制axios库
 */
import axios from 'axios'
import cookie from '../core/cookie'
import config from '../config';
import router from '../router';

const qs = require('qs');

axios.defaults.baseURL = config.API_BASE_URL;
axios.defaults.timeout = 90 * 1000 * 2;

/**
 * POST请求方式
 * @param url           请求地址
 * @param options       请求参数
 * @param others        其它请求参数
 * @returns {Promise<any>}
 */
export function post(url, options, others = {}) {
  return fetch(url, options, 'POST', others);
}

/**
 * GET请求方式
 * @param url           请求地址
 * @param options       请求参数
 * @param others        其它请求参数
 * @returns {Promise<any>}
 */
export function get(url, options, others = {}) {
  return fetch(url, options, 'GET', others);
}

/**
 * PUT请求方式
 * @param url           请求地址
 * @param options       请求参数
 * @param others        其它请求参数
 * @returns {Promise<any>}
 */
export function put(url, options, others = {}) {
  return fetch(url, options, 'PUT', others);
}

/**
 * 统一请求封装
 * @param url           请求地址
 * @param params        请求参数
 * @param method        请求方法
 * @param others        其它请求参数
 * @returns {Promise<any>}
 */
function fetch(url, params = {}, method = 'POST', others = {}) {
  return new Promise((resolve, reject) => {
    let postParams = {};
    let getParams = {};
    switch (method.toUpperCase()) {
      case 'POST':
        postParams = params;
        break;
      case 'PUT': // FORM
        postParams = qs.stringify(params);
        method = 'POST';
        break;
      case 'GET':
      case 'DELETE':
        getParams = params;
        break;
    }

    const defaultHeaders = {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json;charset=UTF-8'
    };

    axios({
      method: method,
      url: url,
      data: postParams,
      params: getParams,
      timeout: others.timeout || 1000 * 60,
      // withCredentials: true,
      headers: Object.assign(defaultHeaders, others.headers)
    }).then((response) => {
      if (response.status !== 200) {
        window.$messageBox({message: 'Network Error! please refresh the page and try again later.'});
        return;
      }
      const code = response.data.code;
      if (code === 0) {
        resolve(response.data);
      } else {
        window.$message.error(response.data.msg);
        reject(response.data);
      }
    }).catch((error) => {
      console.log(error)
      window.$messageBox({message: 'Network Error! please refresh the page and try again later.'});
      // token 过期
      // router.push({
      //   name: 'login',
      //   params: {urlType: 1}
      // });
    });
  });
}

/**
 * 对请求进行统一拦截,添加token参数
 */
axios.interceptors.request.use(request => {
  request.headers['X-Auth-Value'] = cookie.get('token');
  return request;
}, err => {
  return Promise.reject(err);
});
/**
 * 对响应进行统一拦截
 */
axios.interceptors.response.use(response => {
  if([101010, 20001].includes(response.data.code)) {
    // token 过期
    router.push({
      name: 'login',
      params: {urlType: 1}
    });
  }
  return response;
}, err => {
  return Promise.reject(err);
});
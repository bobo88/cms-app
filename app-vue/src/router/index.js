import Vue from 'vue'
import VueRouter from 'vue-router'
import Store from '../store/index'
import constant from '../constant/index'
import cookie from '@/core/cookie'
// 
import Home from '@/components/Home'
import Login from '@/components/Login'

Vue.use(VueRouter)

let isHistory = process.env.NODE_ENV !== 'production'
isHistory = true

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      isLoginPage: true
    }
  }
];

const router = new VueRouter({
  mode: 'hash',
  // linkActiveClass: 'page-active',
  history: isHistory,
  base: __dirname,
  routes: routes
})
/**
 * 当一个导航触发时，全局的 before 钩子按照创建顺序调用。钩子是异步解析执行，此时导航在所有钩子 resolve 完之前一直处于 等待中。
 *  to: Route: 即将要进入的目标 路由对象
 *  from: Route: 当前导航正要离开的路由
 *  next: Function: 一定要调用该方法来 resolve 这个钩子。
 */
router.beforeEach((to, from, next) => {
  if (cookie.get('userName') && cookie.get('userName').length > 0) {
    let loginData = {};
    loginData.UserName = cookie.get('userName');
    loginData.UserType = cookie.get('userType');
    loginData.UserToken = cookie.get('userToken');
    Store.commit(constant.SET_LOGIN_DATA, loginData);
  }
  // 当前页面是否需要认证
  // let { auth = false } = to.meta;
  // 是否完成过认证
  var isLogin = Store.getters[constant.GET_IS_LOGIN] || false;
  let isLoginPage = to.meta.isLoginPage || false;
  Store.commit(constant.SET_IS_LOGIN_PAGE, isLoginPage);
  console.log(22, isLogin, isLoginPage)
  // 如果即将进入的页面需要认证，且当前没有认证，且当前页面不是登录页面，则跳转到登录页面
  if (!isLogin && !isLoginPage) {
    return next({path: '/login', 'params': {'urlType': 0}});
  }
  next();
})


export default router;

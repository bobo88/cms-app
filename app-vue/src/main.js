// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import 'babel-polyfill'
import App from './App'
import router from './router'
import Api from './api'
import dateUtil from './core/date'
import cookie from './core/cookie'
import VueVideoPlayer from 'vue-video-player'
import localStore from 'store';
import store from './store'

import * as filters from './filters'
import config from './config'
import constant from './constant'

// 跑马灯
import MarqueeText from 'vue-marquee-text-component'
Vue.component('marquee-text', MarqueeText)

// // 国际化
// import VueI18n from 'vue-i18n';
// import enLocale from 'element-ui/lib/locale/lang/en';
// import zhLocale from 'element-ui/lib/locale/lang/zh-CN';
// import ElementLocale from 'element-ui/lib/locale';
// Vue.use(VueI18n);
// /* ---------使用语言包----------- */
// const messages = { en: Object.assign({}, require('./assets/lang/en'), { ...enLocale }), zh: Object.assign({}, require('./assets/lang/cn'), { ...zhLocale })
// };
// // locale语言标识（注意：为了在js中能切换语言，vue实例created时，会先对该属性进行改变操作，以便vue实例能监控$i18n.locale，实现对data默认属性的赋值）
// // set locale
// const i18n = new VueI18n({locale: localStorage.getItem('language') ? localStorage.getItem('language') : 'en', messages});
// ElementLocale.i18n((key, value) => i18n.t(key, value))

// // 左右滑动
// import VueAwesomeSwiper from 'vue-awesome-swiper'
// import 'swiper/dist/css/swiper.css'
// Vue.use(VueAwesomeSwiper)

// require videojs style
import 'video.js/dist/video-js.css'
// import 'vue-video-player/src/custom-theme.css'

Vue.use(VueVideoPlayer)

Vue.config.productionTip = false

// element-ui组件样式
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI);

// 注册全局过滤器
Object.keys(filters).forEach(k => Vue.filter(k, filters[k]))
window.$messageBox = ElementUI.MessageBox;
window.$loading = ElementUI.Loading;
window.$alert = ElementUI.MessageBox.alert;
window.$confirm = ElementUI.MessageBox.confirm;
window.$prompt = ElementUI.MessageBox.prompt;
window.$notify = ElementUI.Notification;
window.$message = ElementUI.Message;
window.$cookie = cookie

// 添加Vue的原型链(只读)
Object.defineProperty(Vue.prototype, 'Config', { value: config })
Object.defineProperty(Vue.prototype, 'Constant', { value: constant })
Object.defineProperty(Vue.prototype, '$Api', { value: Api })
Object.defineProperty(Vue.prototype, '$filters', { value: filters })
// Object.defineProperty(Vue.prototype, '$iG', { value: iG });
Object.defineProperty(Vue.prototype, '$dateUtil', { value: dateUtil })
Object.defineProperty(Vue.prototype, '$cookie', { value: cookie })
Object.defineProperty(Vue.prototype, '$localStore', { value: localStore })

Vue.prototype.$store = store;
// element-ui组件
Vue.prototype.$loading = ElementUI.Loading;
Vue.prototype.$MessageBox = ElementUI.MessageBox;
Vue.prototype.$alert = ElementUI.MessageBox.alert;
Vue.prototype.$confirm = ElementUI.MessageBox.confirm;
Vue.prototype.$prompt = ElementUI.MessageBox.prompt;
Vue.prototype.$notify = ElementUI.Notification;
Vue.prototype.$message = ElementUI.Message;

/* eslint-disable no-new */
new Vue({
  router,
  store,
  // i18n,
  components: { App },
  render: h => h(App)
}).$mount('#app')

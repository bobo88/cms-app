import constant from '../../constant'
import api from '../../api'

/**
 * 公共存储模块
 */
const moduleStorage = {
  state: {
    allCountry: [],
    allAndroidVersion: [],
    allIosVersion: []
  },
  mutations: {
    getAllCountry (state, allCountry) {
      state.allCountry = allCountry
    },
    getAndroidVersion (state, allAndroidVersion) {
      state.allAndroidVersion = allAndroidVersion
    },
    getIosVersion (state, allIosVersion) {
      state.allIosVersion = allIosVersion
    }
  },
  actions: {
    async [constant.GET_ALL_COUNTRY_ASYNC] ({ commit }) {
      // let data = await api.getAllCountry();
      // commit('getAllCountry', data.data)
    },
    async [constant.GET_ALL_VERSION_ASYNC] ({ commit }) {
      // const options = { effectStatus: 1, platformType: 0, pageIndex: 0, pageSize: 1000, endTime: 0, startTime: 0 };
      // let data = await api.getVersionInfoListData(options);
      // const dataList = data.data ? data.data.dataList : [];
      // const allSystemVersions = [];
      // allSystemVersions.android = dataList.filter(item => item.platformType === 1);
      // allSystemVersions.ios = dataList.filter(item => item.platformType === 2);

      // //vuex-persistedstate 只能存放单层的数组，不能对象里面套数组
      // commit('getIosVersion', allSystemVersions.ios)
      // commit('getAndroidVersion', allSystemVersions.android)
    }
  }
}

export default moduleStorage

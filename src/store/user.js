const user = {
  state: {
    userInfo: null,
    addressInfo: null,
  },
  getters: {
    hideCode(state) {
      return state.userInfo.code = '******'
    },
    getDetailAddress(state) {
      return state.addressInfo.province + state.addressInfo.city + state.addressInfo.county + state.addressInfo.addressDetail
    }
  },
  mutations: {
    updateUserInfo(state, newUserInfo) {
      state.userInfo = newUserInfo;
    },
    updateAddressInfo(state, newAddressInfo) {
      state.addressInfo = newAddressInfo
    }
  },
  actions: {},
};

export default user;

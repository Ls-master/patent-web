
export default {
  namespaced: true,
  state: {
    dataJson: {
      topdata: {
        typenumber: '',
        casenumber: ''
      },
      claim: {
        dataList: []
      },
      instructions: {}
    }
  },
  mutations: {
    setTopdata(state, val) {
      state.dataJson.topdata = val;
    },
    setClaim(state, val) {
      state.dataJson.claim = val;
    },
    setInstructions(state, val) {
      state.dataJson.instructions = val;
    }
  },
  actions: {

  },
  getters: {
    getDataJson: (state, getters) => state.dataJson
  }
}

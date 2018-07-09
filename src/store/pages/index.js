
export default {
  namespaced: true,
  state: {
    dataJson: {
      topdata: {
        typenumber: '',
        casenumber: ''
      },
      // claim: {
      //   dataList: []
      // },
      implementation: [
        // {
        //   label: 0,
        //   claim: '',
        //   claim_reg: '',
        //   fun: '',
        //   effect: '',
        //   type: '', alone/sub
        // }
      ],
      instructions: []
    }
  },
  mutations: {
    setTopdata(state, val) {
      state.dataJson.topdata = val;
    },
    // setClaim(state, val) {
    //   state.dataJson.claim = val;
    // },
    setImplementation(state, val) {
      state.dataJson.implementation = val;
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

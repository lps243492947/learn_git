import * as types from '../types'

const state = {
  showTakeout: false
}

const mutations = {
  [types.COM_SHOW_TAKEOUT] (state, status) {
    state.showTakeout = status
  }
}

const actions = {
  setShowTakeout ({commit}, status) {
    commit(types.COM_SHOW_TAKEOUT, status)
  }
}

const getters = {
  showTakeout: state => state.showTakeout
}

export default {
  state,
  mutations,
  actions,
  getters
}
import * as types from '../types'

const state = {
  showCode: false
}

const mutations = {
  [types.COM_SHOW_CODE] (state, status) {
    state.showCode = status
  }
}

const actions = {
  setShowCode ({commit}, status) {
    commit(types.COM_SHOW_CODE, status)
  }
}

const getters = {
  showCode: state => state.showCode
}

export default {
  state,
  mutations,
  actions,
  getters
}
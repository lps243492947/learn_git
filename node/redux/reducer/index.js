const { combineReducers } = require('redux');
const filmReducer = require('./filmReducer.js');
const filmFilterReducer = require('./filmFilter.js');
module.exports = combineReducers({
  films: filmReducer,
  filter: filmFilterReducer
})
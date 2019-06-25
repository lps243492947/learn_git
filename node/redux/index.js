const { createStore, applyMiddleware } = require('redux');
const thunk = require('redux-thunk').default;
const reducer = require('./reducer/index');
const store = createStore(
  reducer,
  applyMiddleware(thunk)
);
store.subscribe(() => {
  console.log('store change:', store.getState());
})
store.dispatch({
  type: 'ADD_FILM',
  id: 0,
  name: '流浪地球'
})
store.dispatch((dispatch) => {
  setTimeout(() => {
    dispatch({
      type: 'DELETE_FILM',
      id: 0
    })
  },3000)
})
console.log(store.getState());
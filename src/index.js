import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import './index.css'
import combineReducer from './reducers/index'

import TodoApp from './components/TodoAPP.js'

const store = createStore(combineReducer);


ReactDOM.render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  document.getElementById('root')
);



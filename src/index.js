import React from 'react'
import ReactDOM from 'react-dom'
import AppRouter, { history } from './routes/AppRouter'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import 'normalize.css'
import './styles/styles.scss'
import 'react-dates/lib/css/_datepicker.css'
import 'react-dates/initialize'


const store = configureStore()
const app = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)



ReactDOM.render(app, document.getElementById('root'))
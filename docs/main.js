import React from 'react'
import ReactDOM from 'react-dom'
import { createBrowserHistory } from 'history'
import HMRLoading from './components/HMRLoading'

const MOUNT_NODE = document.getElementById('app')

const render = () => {
  const history = createBrowserHistory()
  const App = require('./components/App').default

  ReactDOM.render(<App history={history} />, MOUNT_NODE)
}

// ======================================================
// Configuration HMR only run when files change
// ======================================================
if (process.env.NODE_ENV === 'development') {
  if (module.hot) {
    module.hot.accept(() => {
      ReactDOM.render(<HMRLoading />, MOUNT_NODE)
      setTimeout(() => render())
    })
  }
}

// Run app
render()

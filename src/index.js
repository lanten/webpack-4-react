import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.scss'

import App from './views/App'

const root = document.createElement('div')
document.body.appendChild(root)

ReactDOM.render(<App />, root)

// import('./views/App').then(({ default: App }) => {
//   ReactDOM.render(<App />, root)
// })

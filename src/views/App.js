import React from 'react'

import AppRouter from './AppRouter'

export default class Main extends React.Component {

  constructor() {
    super()
    // console.log(this)
  }

  render() {
    return (
      <div id="app">
        <p>OjbK</p>
        <AppRouter />
      </div>
    )
  }
} // class end
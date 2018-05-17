import React from 'react'

export default class Main extends React.Component {

  componentDidMount(){
    console.log(this)
  }

  render(){
    return(
      <div>
        222
        {this.props.params.name}
      </div>
    )
  }

} // class end
import React, { Component } from 'react'
import './Label.css' 
export default class Label extends Component {
  render() {
      const props = this.props;
      const style = props.isActive ? {background: 'green'} : {background: 'orange'}
    return (
      <span className="list-label-item" style={style}>  {props.isActive ? 'Active':'Not Active'}</span>
    )
  }
}

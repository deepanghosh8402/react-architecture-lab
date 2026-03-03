import React from 'react'
import './ListItem.css'
import Label from './Label'

export default function ListItem(props) {
    const {
           title,
           descr,
           isActive,
           id 
    }=props;
  return (
     <div className="list-item" >
        <div className="list-title">
          <h4>{title}</h4>
          <label>Delete</label>
        </div>
        <div className="list-descr">
          {descr}
        </div>

        <div className="list-label">
          <Label isActive={isActive}/>
        </div>
      </div>
  )
}

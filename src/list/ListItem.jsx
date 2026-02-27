import React from 'react'
import './ListItem.css'

export default function ListItem() {
  return (
     <div className="list-item">
        <div className="list-title">
          <h4>Titile</h4>
          <label>Delete</label>
        </div>
        <div className="list-descr">
          Discription
        </div>
        <div className="list-label">
          <label>Label Active</label>
        </div>
      </div>
  )
}

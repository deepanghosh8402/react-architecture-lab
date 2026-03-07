import React from 'react'
import './Header.css'

export default function Header(props) {
    const{selectedPage}=props
    
    return (
        <div className="app-header">
            <span className="header-title">React Archit </span>
            <span className="header-menu"  onClick={()=>{selectedPage('Home')}}>Home </span>
            <span className="header-menu"  onClick={()=>{selectedPage('Products')}}>Products </span>
            <span className="header-menu" onClick={()=>{selectedPage('Setting')}}>Settings </span>
            <span className="header-menu" onClick={()=>{selectedPage('Reducer')}}>Reducer </span>
            <span className="header-menu" onClick={()=>{selectedPage('Redux')}}>Redux </span>
            <span className="header-menu" onClick={()=>{selectedPage('ReduxThunk')}}>ReduxThunk </span>
            <span className="header-menu">logout </span>
        </div>
    )
}



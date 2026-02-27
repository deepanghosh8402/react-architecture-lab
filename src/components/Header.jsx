import React from 'react'
import './Header.css'

export default function Header() {
    return (
        <div className="app-header">
            <span className="header-title">React Archit </span>
            <span className="header-menu">Home </span>
            <span className="header-menu">Usage </span>
            <span className="header-menu">Settings </span>
            <span className="header-menu">logout </span>
        </div>
    )
}



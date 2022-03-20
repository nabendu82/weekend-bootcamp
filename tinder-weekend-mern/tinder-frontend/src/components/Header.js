import { IconButton } from '@material-ui/core'
import { Forum, Person } from '@material-ui/icons'
import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <IconButton>
                <Person fontSize='large' className='header__icon' />
            </IconButton>
            <img className="header__logo" src="https://1000logos.net/wp-content/uploads/2021/04/Roblox-logo-500x281.png" alt="header" />
            <IconButton>
                <Forum fontSize='large' className='header__icon' />
            </IconButton>
        </div>
    )
}

export default Header
import React from 'react'
import PropTypes from 'prop-types'

import logo from '../images/logo.jpg'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
            <img src={logo} alt="" />
        </div>
        <div className="content">
            <div className="inner">
                <h1>Czech Theater</h1>
                <p>A multicultural amateur community theater in Brno presenting Czech plays in English.</p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('about')}}>About</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('upcoming')}}>Future</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('past')}}>Past</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('contact')}}>Contact</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header

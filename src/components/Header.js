import React from 'react'
import PropTypes from 'prop-types'
import { Router } from '@reach/router'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
            <span className="icon fa-hand-peace-o"></span>
        </div>
        <div className="content">
            <div className="inner">
                <h1>Fred Palmer</h1>
                <p>"Charming, handsome, funny!" - My mum describing someone who isn't me.</p>
            </div>
        </div>
        <nav>
            <ul className = 'list'>
                <li><a id = 'intro' href="javascript:;" onClick={() => {props.onOpenArticle('intro')}}>Intro</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('work')}}>Work</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('contact')}}>Contact</a></li>
            </ul>
        </nav>
        <script src='pushstate.js'></script>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
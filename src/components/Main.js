import React, { Component } from 'react'
import PropTypes, { array } from 'prop-types'
import { Link } from 'gatsby'

import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import aboutpic from '../images/aboutpic.jpg'
import pic03 from '../images/pic03.jpg'
import Pdf from '../documents/Fred_CV.pdf'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Intro</h2>
          <span className="image main">
            <img src={pic02} alt="" />
          </span>
          <p>Lorem Ipsum<br/>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget lacus sodales neque suscipit rutrum. Nunc posuere dui a velit porta imperdiet. Nunc eu ipsum in urna vehicula molestie. Nullam volutpat tortor nec elit bibendum, nec convallis arcu tincidunt. Integer tortor massa, venenatis ut iaculis et, lacinia dictum dui. Etiam aliquet id libero in ullamcorper. Phasellus eget neque a mauris tempor feugiat a non eros. Vivamus vel elit quis diam hendrerit dignissim vitae id purus. Nulla facilisi. In sed leo eros. Aliquam metus nisi, interdum vel diam elementum, porta rhoncus elit. Integer consequat dictum odio, ac gravida nibh tempus vitae. Donec semper risus nulla, vitae rhoncus sem sagittis quis. Aliquam pulvinar, sem et tempor condimentum, nibh sapien rhoncus arcu, eget ullamcorper nisl est sit amet urna.<br/>
          </p>
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Work</h2>
          <span className="image main">
            <img src={pic02} alt="" />
          </span>
          <p>Check out my <Link to="/emojipasta">emojipasta tool.</Link></p>
          <p>Check out my <Link to="/adventofcode">Advent of Code attempts.</Link></p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          <ul className="icons">
            <li>
              <a href="https://twitter.com/Fred_P1" className="icon fa-twitter">
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/fredpalmer1995"
                className="icon fa-facebook"
              >
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/fredpalmers"
                className="icon fa-instagram"
              >
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a href="https://github.com/FredP1" className="icon fa-github">
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main

import React from 'react'
import PropTypes from 'prop-types'

import logoWide from '../images/logo-wide.jpg'
import bow from '../images/TakeABow.jpg'
import ice from '../images/WomanInIceCave.jpg'

class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div ref={this.props.setWrapperRef} id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">About</h2>
          <span className="image main"><img src={logoWide} alt="" /></span>
          <p>Our mission is to make Czech theater culture accessible to people who do not understand the Czech language and to show Czech people a different view of their culture than they are used to, thus bridging the gaps between cultures. We mainly organize theater performances and disseminate information about Czech theater.</p>
          {close}
        </article>

        <article id="upcoming" className={`${this.props.article === 'upcoming' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Upcoming Shows</h2>
          <span className="image main"><img src={ice} alt="" /></span>
          <p>Jenůfa (Her Step-daughter) by Gabriela Preissová translated by Barbara Day. This play was the basis for Janáček's famous opera.</p>
          {close}
        </article>

        <article id="past" className={`${this.props.article === 'past' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Past Shows</h2>
          <span className="image main"><img src={bow} alt="" /></span>
          <p>Our first show was R.U.R. by Karel Čapek translated into English by Claudia Novack. This Czech play that introduced the word "robot" to the world was prescient for its time and the questions it raises remain relevant today.</p>
          {close}
        </article>

        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Contact</h2>
          <p>Registered Office (mailing address): <br />Czech Theater, z.s. <br /> Tučkova 915/22, Veveří <br />602 00 Brno</p>
          <ul className="icons">
            <li><a href="https://www.facebook.com/czechtheater/" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
            <li><a href="https://www.instagram.com/czechtheater/" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
            <li><a href="mailto:czechtheater@gmail.com" className="icon fa-envelope"><span className="label">GitHub</span></a></li>
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
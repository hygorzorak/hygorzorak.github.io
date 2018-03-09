import React, {Component} from 'react';
import {Link} from 'react-router-dom'

const UserCard = () => {
  return (
    <div>
      <div className="avatar">
        <img
          src="https://scontent.fbfh3-1.fna.fbcdn.net/v/t1.0-9/23032766_1454263947962582_1677257818147753820_n.jpg?oh=475627fa33a91feddf2e6e6eede70c3f&oe=5AFFAE89"
          alt="avatar"/>
      </div>
      <div className="name">
        <h1>Hygor Zorak</h1>
        <span>Front-End Engineer</span>
      </div>
    </div>
  )
}

const SocialIcons = () => {
  return (
    <div className="social-icons">
      <ul>
        <li>
          <a href="https://www.fb.com/hygorzorak" target="blank">
            <i className="fa fa-facebook" aria-hidden="true"></i>
          </a>
        </li>
        <li>
          <a href="https://www.twitter.com/hygorzorak" target="blank">
            <i className="fa fa-twitter" aria-hidden="true"></i>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/hygorzorak" target="blank">
            <i className="fa fa-linkedin" aria-hidden="true"></i>
          </a>
        </li>
        <li>
          <a href="https://www.canaldozorak.com" target="blank">
            <i className="fa fa-youtube" aria-hidden="true"></i>
          </a>
        </li>
        <li>
          <a href="https://profiles.udacity.com/p/2949928563" target="blank">
            <i className="fa fa-dribbble" aria-hidden="true"></i>
          </a>
        </li>
      </ul>
    </div>
  )
}

const MainNav = (props) => {
  return (
    <nav className="main-nav">
      <ul className="navigation">
        <li
          className={(props.location.pathname === "/")
          ? "current"
          : ""}>
          <Link to="/">Welcome</Link>
        </li>
        <li
          className={(props.location.pathname === "/about")
          ? "current"
          : ""}>
          <Link to="/about">About</Link>
        </li>
        <li
          className={(props.location.pathname === "/education")
          ? "current"
          : ""}>
          <Link to="/education">Education</Link>
        </li>
        <li
          className={(props.location.pathname === "/experience")
          ? "current"
          : ""}>
          <Link to="/experience">Experience</Link>
        </li>
        <li
          className={(props.location.pathname === "/blog")
          ? "current"
          : ""}>
          <Link to="/blog">Blog</Link>
        </li>
        <li
          className={(props.location.pathname === "/contact")
          ? "current"
          : ""}>
          <a href="mailto:email@site.com">Contact</a>
        </li>
      </ul>
    </nav>
  )
}

const Copyright = () => {
  return (
    <div className="copyright">
      <span>Copyright©2018 Hygor Zorak</span>
    </div>
  )
}

export class HeaderComponent extends Component{
  state = {
    hideMenu: true
  }

  handlerMenu = () => {
    this.setState({
      hideMenu: !this.state.hideMenu
    })
  }

  render() {
    return (
      <div>
        <header
          className={`header pull-left ${this.state.hideMenu ? "header-mobile" : ""}`}
          style={{
          textAlign: "center"
        }}>
          <div className="mobile-bar visible-sm visible-xs">
            <button className="icon-btn" onClick={this.handlerMenu}>
              <div className="hamburger-menu">
                <div className="bar"></div>
              </div>
            </button>
          </div>
          <UserCard/>
          <SocialIcons/>
          <MainNav location={this.props.location}/>
          <Copyright/>
        </header>
      </div>
    )
  }
}
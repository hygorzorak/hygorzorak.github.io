import React, { Component } from "react";
import { Link } from "react-router-dom";

const profile = require("../profile.jpg");

const UserCard = () => (
  <div>
    <div className="avatar">
      <img src={profile} alt="avatar" />
    </div>
    <div className="name">
      <h1>Hygor Zorak</h1>
      <span>Front-End Engineer</span>
    </div>
  </div>
);

const SocialIcons = () => (
  <div className="social-icons">
    <ul>
      <li>
        <a href="https://www.fb.com/hygorzorak" target="blank">
          <i className="fa fa-facebook" aria-hidden="true" />
        </a>
      </li>
      <li>
        <a href="https://www.twitter.com/hygorzorak" target="blank">
          <i className="fa fa-twitter" aria-hidden="true" />
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/hygorzorak" target="blank">
          <i className="fa fa-linkedin" aria-hidden="true" />
        </a>
      </li>
    </ul>
  </div>
);

const MainNav = ({ location }) => (
  <nav className="main-nav">
    <ul className="navigation">
      <li className={location.pathname === "/" ? "current" : ""}>
        <Link to="/">Welcome</Link>
      </li>
      <li className={location.pathname === "/about" ? "current" : ""}>
        <Link to="/about">About</Link>
      </li>
      <li className={location.pathname === "/contact" ? "current" : ""}>
        <a href="mailto:email@site.com">Contact</a>
      </li>
    </ul>
  </nav>
);

const Copyright = () => (
  <div className="copyright">
    <span>Copyright©2018 Hygor Zorak</span>
  </div>
);

const actions = {
  init() {
    return {
      hideMenu: true
    };
  },
  update(hideMenu) {
    return {
      hideMenu
    };
  }
};

export class HeaderComponent extends Component {
  state = actions.init();

  shouldComponentUpdate(nextProps) {
    if (this.props.location.pathname !== nextProps.location.pathname) {
      this.setState(actions.update(true));
    }
    return true;
  }

  handlerMenu = () => {
    const { hideMenu } = this.state;
    this.setState(actions.update(!hideMenu));
  };

  render() {
    const { hideMenu } = this.state;
    const { location } = this.props;

    return (
      <div>
        <header
          className={`header pull-left ${hideMenu ? "header-mobile" : ""}`}
          style={{
            textAlign: "center"
          }}
          onMouseLeave={() => this.setState(actions.update(true))}
        >
          <div className="mobile-bar visible-sm visible-xs">
            <button className="icon-btn" onClick={this.handlerMenu}>
              <div className="hamburger-menu">
                <div className="bar" />
              </div>
            </button>
          </div>
          <UserCard />
          <SocialIcons />
          <MainNav location={location} />
          <Copyright />
        </header>
      </div>
    );
  }
}

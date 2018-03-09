import React from "react";

export const AboutComponent = () => {
  return (
    <section id="about" className="about">
      <div className="section-header">
        <h2>About Zorak</h2>
      </div>

      <div className="intro">
        <ul className="info">
          <li>Birthday: February 20</li>
          <li>Location: Brazil</li>
          <li>Email: hygorzorak@gmail.com</li>
        </ul>
        <p>Front End Developer, committed to create beautiful and functional sites and
          mobile applications. I believe that attention to detail and passion is the key
          for success. Recently I finished a React Nanodegree program, where I can study
          in depth React, Redux and React Native. I work with JavaScript, React, Angular,
          Node, GraphQl, jQuery, HTML / CSS, Node, MongoDB, MariaDB and SQLite.</p>
      </div>

      <div className="skills">
        <div className="row">
          <div className="col-md-6 col-sm-6 col-xs-12 item">
            <div className="skill-info clearfix">
              <h3 className="pull-left">HTML5 | CSS3 | ES6</h3>
              <span className="pull-right">90%</span>
            </div>
            <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuenow="99"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{width:"90%"}}></div>
            </div>
          </div>

          <div className="col-md-6 col-sm-6 col-xs-12 item">
            <div className="skill-info clearfix">
              <h3 className="pull-left">React/Redux | Angular 4/5 | Vue</h3>
              <span className="pull-right">90%</span>
            </div>
            <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuenow="80"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{width:"90%"}}></div>
            </div>
          </div>

          <div className="col-md-6 col-sm-6 col-xs-12 item">
            <div className="skill-info clearfix">
              <h3 className="pull-left">Node | Express | MongoDB</h3>
              <span className="pull-right">60%</span>
            </div>
            <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuenow="45"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{width:"60%"}}></div>
            </div>
          </div>

          <div className="col-md-6 col-sm-6 col-xs-12 item">
            <div className="skill-info clearfix">
              <h3 className="pull-left">GraphQl | Apollo | Relay</h3>
              <span className="pull-right">75%</span>
            </div>
            <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuenow="60"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{width:"75%"}}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
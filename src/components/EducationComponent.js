import React from "react"

export const EducationComponent = () => {
  return (
    <section id="resume" className="resume">

      <div className="section-header">
        <h2>Education</h2>
        <a
          href="https://drive.google.com/file/d/1RkP0sajpzezOm54lz5AMEV10jGMGyxDa/view?usp=sharing"
          target="blank"
          className="resume-download"
          data-toggle="tooltip"
          data-placement="bottom"
          title="Download Resume">
          <i className="fa fa-download" aria-hidden="true"></i>
        </a>
      </div>

      <div className="row">
        <div className="col-md-6 col-sm-6 col-xs-6">
          <div className="top-item resume-item">
            <h2>React Nanodegree</h2>
            <span>2017 - 2018 | UDACITY</span>
            <p className="hidden-xs">Web and mobile development studies with React, Redux and React Native.</p>
          </div>
        </div>

        <div className="col-md-6 col-sm-6 col-xs-6">
          <div className="top-item resume-item">
            <h2>Webdev Postgraduation</h2>
            <span>2016 - 2018 | UNICESUMAR</span>
            <p className="hidden-xs">Web development studies with HTML5, CSS3, JavaScript, Angular, React,
              Electron, PHP (Zend and Laravel) Tests and Design Pattern .</p>
          </div>
        </div>

        <div className="col-md-6 col-sm-6 col-xs-6">
          <div className="resume-item">
            <h2>Software Engineering</h2>
            <span>2014 - 2017 | UNICESUMAR</span>
            <p className="hidden-xs">Software Engineering studies with project, UML, agile development (Kanban and
              Scrum), software development (C, C++, Java, HTML, CSS and JavaScript).</p>
          </div>
        </div>

        <div className="col-md-6 col-sm-6 col-xs-6">
          <div className="resume-item">
            <h2>System Analysis</h2>
            <span>2014 - 2016 | UNICESUMAR</span>
            <p className="hidden-xs">Web development studies with HTML5, CSS3, Javascript and PHP</p>
          </div>
        </div>

      </div>
    </section>
  )
}
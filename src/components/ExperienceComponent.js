import React from "react"

export const ExperienceComponent = () => {
  return (
    <section id="resume" className="resume">

      <div className="section-header">
        <h2>Experience</h2>
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
        <div className="col-md-6 col-sm-6 col-xs-12">
          <div className="top-item resume-item">
            <h2>Front-End Developer</h2>
            <span>2018 - | SOCIAL BASE - FLORIANOPOLIS</span>
            <p>Development with React/Redux, Angular and GraphQl. Usage of Kanban and Scrum</p>
          </div>
        </div>

        <div className="col-md-6 col-sm-6 col-xs-12">
          <div className="top-item resume-item">
            <h2>JavaScript Developer</h2>
            <span>2017 - 2018 | MATERA - MARINGA</span>
            <p>Worked with React/Redux, Angular, Ionic, Node, Server side rendering,
              Scrum/Kanban, problems solving and team training</p>
          </div>
        </div>

        <div className="col-md-6 col-sm-6 col-xs-12">
          <div className="resume-item">
            <h2>FullStack Developer</h2>
            <span>2014 - 2017</span>
            <p>Worked with project planning, HTML, CSS, JS and PHP development, problems
              solving, Kankan and team lead.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
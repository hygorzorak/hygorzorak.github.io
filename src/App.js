import React, { Component } from "react";
import { Switch, Route, withRouter } from "react-router-dom";

import { PreloaderComponent } from "./components/PreloaderComponent";
import { HeaderComponent } from "./components/HeaderComponent";
import { WelcomeComponent } from "./components/WelcomeComponent";
import { AboutComponent } from "./components/AboutComponent";
import { NotFoundComponent } from "./components/NotFoundComponent";

import "./App.css";

const actions = {
  init() {
    return {
      ready: false
    };
  },
  update(ready) {
    return {
      ready
    };
  }
};

class App extends Component {
  state = actions.init();

  componentDidMount() {
    setTimeout(() => {
      this.setState(actions.update(true));
    }, 2000);
  }

  render() {
    const { ready } = this.state;
    const { location } = this.props;
    
    return (
      <div className="wrapper">
        {ready ? (
          <div>
            <HeaderComponent location={location} />
            <div className="main-content pull-right">
              <Switch>
                <Route exact path="/" component={WelcomeComponent} />
                <Route exact path="/about" component={AboutComponent} />
                <Route component={NotFoundComponent} />
              </Switch>
            </div>
          </div>
        ) : (
          <PreloaderComponent />
        )}
      </div>
    );
  }
}

export default withRouter(App);

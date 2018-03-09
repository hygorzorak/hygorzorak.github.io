import React, {Component} from 'react';
import {Switch, Route, withRouter} from 'react-router-dom'
import {connect} from 'react-redux'

import {PreloaderComponent} from './components/PreloaderComponent'
import {HeaderComponent} from './components/HeaderComponent'
import {WelcomeComponent} from './components/WelcomeComponent'
import {AboutComponent} from './components/AboutComponent'
import {EducationComponent} from './components/EducationComponent'
import {ExperienceComponent} from './components/ExperienceComponent'
import {BlogComponent} from './components/BlogComponent'
import {NotFoundComponent} from './components/NotFoundComponent'

import "./App.css"

class App extends Component {
  state = {
    ready: false
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ready: true});
    }, 2000)
  }

  render() {
    return (
      <div className="wrapper">
        {!this.state.ready && 
          <PreloaderComponent/>
        }
        {this.state.ready &&
          <div>
            <HeaderComponent location={this.props.location}/>
            <div className="main-content pull-right">
              <Switch >
                <Route exact path="/" render={() => (
                  <WelcomeComponent />
                )}/>
                <Route exact path="/about" render={() => (
                  <AboutComponent />
                )}/>
                <Route exact path="/education" render={() => (
                  <EducationComponent />
                )}/>
                <Route exact path="/experience" render={() => (
                  <ExperienceComponent />
                )}/>
                <Route exact path="/blog" render={() => (
                  <BlogComponent />
                )}/>
                {this.props.posts.map(post => (
                  <Route key={post.id} exact path={`/${post.id}`} render={() => (
                    <div>
                      PostDetail
                    </div>
                  )}/>
                ))}
                <Route render={() => (
                  <NotFoundComponent/>
                )}/>
              </Switch>
            </div>
          </div>
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.posts || []
});

export default withRouter(connect(mapStateToProps)(App))

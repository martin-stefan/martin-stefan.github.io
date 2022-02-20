import React from 'react';
import Welcome from './containers/Welcome/Welcome';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Projects from './containers/Projects/Projects';
import Skills from './containers/Skills/Skills';
import Courses from './containers/Courses/Courses';
import SideNav from './components/SideNav/SideNav';
import Experience from './containers/Experience/Experience';
import { Contact } from './components/Contact/Contact';


function App() {
  return (

    <Router>
      <div className="App">
        <div className="base">
          <SideNav />
          
          <div className="base__content">
            <Switch>
              <Route path="/" component={Welcome} exact />
              <Route path="/courses" component={Courses} />
              <Route path="/projects" component={Projects} />
              <Route path="/skills" component={Skills} />
              <Route path="/experience" component={Experience} />
              <Route path="/contact" component={Contact} />

            </Switch>
          </div>
        </div>
      </div>
    </Router>
    );
}

export default App;

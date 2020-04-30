import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { NavBar } from './components/navbar/navbar';
import { MainSplash } from './components/splash';
import ContactPage from './components/contact/contactPage';

import {Switch, Route} from 'react-router-dom';
import aboutPage from './components/about/aboutPage';
import soundPage from './components/soundProjects';
import codePage from './components/codeProjects';
import NavDrawer from './components/navbar/navDrawer';

function App() {
  return (
    <Switch>
      <div className="App">
        <NavBar />
        <Route exact path="/" component={MainSplash}/>
        <Route path="/code" component={codePage}/>
        <Route path="/sound" component={soundPage}/>
        <Route path="/about" component={aboutPage}/>
        <Route path="/contact" component={ContactPage} />

      </div>
    </Switch>
  );
}

export default App;

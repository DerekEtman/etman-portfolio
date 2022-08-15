import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.scss";
import aboutPage from "./components/about/aboutPage";
import codePage from "./components/codeProjects";
import ContactPage from "./components/contact/contactPage";
import Footer from "./components/footer";
import { NavBar2 } from "./components/navbar/navbar2";
import soundPage from "./components/soundProjects";
import projectPage from "./components/soundProjects/projectPage";
import { MainSplash } from "./components/splash";

function App() {
  return (
    <Switch>
      <main className="App">
        <NavBar2 />
        <Route exact path="/" component={MainSplash} />
        <Route path="/code" component={codePage} />
        <Route path="/sound" component={soundPage} />
        <Route path="/sound/:soundProjectID" component={projectPage} />
        <Route path="/about" component={aboutPage} />
        <Route path="/contact" component={ContactPage} />
        <Footer />
      </main>
    </Switch>
  );
}

export default App;

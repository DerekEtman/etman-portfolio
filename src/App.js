import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import AboutPage from "./components/about/aboutPage";
import CodePage from "./components/codeProjects";
import ContactPage from "./components/contact/contactPage";
import Footer from "./components/footer";
import { NavBar2 } from "./components/navbar/navbar2";
import SoundPage from "./components/soundProjects";
import SoundPageMaster from "./components/soundProjects/projectFilterMaster";
import ProjectPage from "./components/soundProjects/projectPage";
import { MainSplash } from "./components/splash";

// function User() {
//   let { id } = useParams();
// }

function App() {
  return (
    <main className="App">
      <NavBar2 />
      <Routes>
        <Route path="/" element={<MainSplash />} />
        <Route path="/code" element={<CodePage />} />
        <Route path="/sound" element={<SoundPage />} />
        <Route path="/sound/:soundProjectID" element={<ProjectPage />} />
        <Route path="/snd" element={<SoundPageMaster />} />
        <Route path="/snd/:soundProjectID" element={<SoundPageMaster />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;

import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/navbar.jsx"; // Your layout component
import HomePage from "./components/home.jsx";
import ExperiencePage from "./components/experience.jsx";
import ProjectsPage from "./components/projects.jsx";
import ContactPage from "./components/contact.jsx";
import SkillsPage from './components/skills.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <Layout>
            <HomePage />
          </Layout>
        } />
        <Route path="/experience" element={
          <Layout>
            <ExperiencePage />
          </Layout>
        } />
        <Route path="/projects" element={
          <Layout>
            <ProjectsPage />
          </Layout>
        } />
        <Route path="/skills" element={
          <Layout>
            <SkillsPage />
          </Layout>
        } />
        <Route path="/contact" element={
          <Layout>
            <ContactPage />
          </Layout>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
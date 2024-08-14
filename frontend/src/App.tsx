import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Signup from "./pages/auth/Signup";
import Login from "./pages/auth/Login";
import ForgotPassword from "./pages/auth/ForgotPassword";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Inbox from "./pages/Inbox";
import Projects from "./pages/Projects";
import Tasks from "./pages/Tasks";
import Teams from "./pages/Teams";
import Settings from "./pages/Settings";
import Project from "./pages/details/Project";
import Task from "./pages/details/Task";
import Team from "./pages/details/Team";
import Mail from "./pages/details/Mail";
import CreateProject from "./modal/CreateProject";
import NewProject from "./pages/NewProject";

function App() {
  return (
    <Routes>
      <Route path="/" Component={LandingPage} />
      <Route path="/auth/signup" Component={Signup} />
      <Route path="/auth/login" Component={Login} />
      <Route path="/auth/password/reset" Component={ForgotPassword} />
      <Route path="/home" Component={Home} />
      <Route path="/dashboard" Component={Dashboard} />
      <Route path="/inbox" Component={Inbox} />
      <Route path="/projects" Component={Projects} />
      <Route path="/tasks" Component={Tasks} />
      <Route path="/teams" Component={Teams} />
      <Route path="/setting" Component={Settings} />
      <Route path="/project/:id" Component={Project} />
      <Route path="/task/:id" Component={Task} />
      <Route path="/team/:id" Component={Team} />
      <Route path="/inbox/:id" Component={Mail} />
      <Route path="/team/:id/new-project" Component={NewProject} />
    </Routes>
  );
}

export default App;

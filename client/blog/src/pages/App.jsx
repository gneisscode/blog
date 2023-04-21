import { useContext, useState } from 'react'
import './App.css'
import Topbar from '../components/Topbar'
import Home from './Home'
import Single from './Single'
import Write from './Write'
import Settings from './Settings'
import Login from './Login'
import Register from './Register'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import axios from 'axios'
import { ContextProvider } from '../context/Context'
import { Context } from "../context/Context";

function App() {
  axios.defaults.baseURL = `https://node-react-forum-api.onrender.com`;
  const {user} = useContext(Context)

  return (
    <Router>
      <Topbar />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route
          exact
          path="/write"
          element={user ? <Write /> : <Register />}
        />
        <Route
          exact
          path="/settings"
          element={user ? <Settings /> : <Register />}
        />
        <Route
          exact
          path="/login"
          element={user ? <Home /> : <Login />}
        />
        <Route
          exact
          path="/register"
          element={user ? <Home /> : <Register />}
        />
        <Route exact path="/post/:id" element={<Single />} />
      </Routes>
    </Router>
  );
}

export default App

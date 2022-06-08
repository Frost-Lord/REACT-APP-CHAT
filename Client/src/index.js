import react from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ReactDOM from "react-dom";

import './index.css';
/////////////////////////////////////////////////////////////
import Home from './App';
import Register from './pages/Register';
import Chat from './pages/chat';
import SetAvatar from "./components/Avatar";
/////////////////////////////////////////////////////////////
import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/chat" element={<Chat />} />
      <Route path="/setAvatar" element={<SetAvatar />} />
    </Routes>
  </Router>,

  document.getElementById("root")
);


reportWebVitals();

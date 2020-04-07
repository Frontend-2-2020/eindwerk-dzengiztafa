// Imports
//////////

// Base dependencies
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// Redux
import { Provider } from "react-redux";
import fullApplicationStore from "./redux/store";

// Components
import Navbar from "./components/navbar/Navbar";
import Landing from "./components/landing/Landing";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Posts from "./components/posts/Posts";

// Styling
import "./assets/App.scss";


// Full Application
///////////////////

export const App = () => {
  return (
    <Provider store={ fullApplicationStore } >
      <Router>
        <Navbar />

        <div className="App">
          <Route exact path="/" component={ Landing } />

          <div className="container">
            <Route exact path="/posts" component={ Posts } />
            <Route exact path="/register" component={ Register } />
            <Route exact path="/login" component={ Login } />
          </div>
        </div>
      </Router>
    </Provider>
  );
};
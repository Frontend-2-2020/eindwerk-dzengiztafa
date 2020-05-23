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
import PostDetail from "./components/posts/PostDetail";
import EditPost from "./components/posts/EditPost";

// Security
import PrivateRoute from "./components/security/PrivateRoute";
import jwt_decode from "jwt-decode";


// Styling
import 'bootstrap/dist/css/bootstrap.min.css';
import EditComment from "./components/comments/EditComment";



// Token validity

// Check for token if page loads
if (localStorage.jwtToken) {
  // Decode token & get user info + expiration
  const decoded = jwt_decode(localStorage.jwtToken);
  // Set user and isAuthenticated
  console.log(decoded)
}


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
            <Route exact path="/post/:postId" component={ PostDetail } />
            <PrivateRoute exact path="/edit/:postId" component={ EditPost } />
            <PrivateRoute exact path="/editComment/:commentId" component={ EditComment } />
          </div>
        </div>
      </Router>
    </Provider>
  );
};

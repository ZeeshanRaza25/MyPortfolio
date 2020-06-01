import React, { Component } from "react";
import './blog.css'
import Cards from './cards/cards'
import {BrowserRouter as Router, Link} from 'react-router-dom';


export class Blog extends Component {

  render() {
    return (
      <div>
      <Router>
        {/* <div class="nav-content">
          <ul class="tabs tabs-transparent">
            <li class="tab">
              <Link to="/interest">Interests</Link>
            </li>
            <li class="tab">
              <Link to="/background">
                Background
              </Link>
            </li>
          </ul>
        </div> */}
        <Cards />
        </Router>
      </div>
    );
  }
}

export default Blog;

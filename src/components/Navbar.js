/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import im1 from '../assets/sidenav.jpg';
import im2 from '../assets/zeeshan.jpg';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Landingpage from "./landingpage";
import Resume from './resume'
import Blog from "./blog";
import Projects from './projects'

export class Navbar extends Component {
    // componentDidMount() {
    //     const M = window.M
    //     document.addEventListener('DOMContentLoaded', function() {
    //       var elems = document.querySelectorAll('.sidenav');
    //       var instances = M.Sidenav.init(elems, {});
    //     });
    //   }
  render() {
    return (
     
      <Router> 
      <div>
        <nav>
        
          <div className="nav-wrapper">
            <a href="#" data-target="slide-out" className="sidenav-trigger">
              <i className="material-icons">menu</i>
            </a>
         
            <Link to="/" class="brand-logo">
             
              {/* <img
                class="img-responsive"
                width="100px"
                height="50px"
                src="https://i.ibb.co/t34yxyq/logo-removebg-preview.png"
                alt="favicon-removebg-preview"
                border="0"
              /> */}
              
            </Link>
            
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              
            <li><Link to="/"> Home</Link> </li>
               
              
            <li> <Link to="/resume">Resume</Link></li>
              
              <li><Link to="/projects">Projects</Link></li>

              <li><Link to="/blog">Blog</Link></li>
            </ul>
          </div>
          
        </nav>
        <ul id="slide-out" className="sidenav">
          <li>
            <div className="user-view">
              <div className="background">
                <img src={im1} alt="image" />
              </div>
              <a href="#user">
                <img className="circle" alt="image" src={im2} />
              </a>
             
              <a className ="comp" href="https://www.linkedin.com/in/zeeshan-raza/"
               target="_blank">
                <span className="black-text name ">Zeeshan Raza</span>
              </a>
              <a className ="comp"
               href="mailto:zeeshanraza252627@gmail.com"
              target="_blank">
                <span className="black-text email ">zeeshanraza252627@gmail.com</span>
              </a>
              </div>  
    
          </li>
          <div className="list">
          <li><Link to="/"> Home</Link> </li>
               
              
               <li> <Link to="/resume">Resume</Link></li>
                 
                 <li><Link to="/projects">Projects</Link></li>
   
                 <li><Link to="/blog">Blog</Link></li>
          </div>
        </ul>
       
        </div>
        <div>

        <Switch>
          <Route exact path="/">
            <Landingpage />
          </Route>
          <Route path="/resume">
            <Resume />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
        </Switch>

      </div>

        </Router>
      
    );
  }
}

export default Navbar;

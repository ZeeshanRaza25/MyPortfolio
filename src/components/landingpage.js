import React, { Component } from "react";
import "./landingpage.css";
// import im2 from '../assets/amitavatar.jpg';

export class Landingpage extends Component {


  render() {

    return (
      <div>
        <div class="container main-info-section">
       
          <div class="text">     
  
            <h1>
              <div class="hello">
                
                <span class="name">H</span>
                <span class="m-left">e</span>
                <span class="m-left">l</span>
                <span class="m-left">l</span>
                <span class="m-left">o</span>
                <span class="m-left">!</span>
              </div>
              <span>I</span>
              <span class="m-left">'</span>
              <span class="m-left">m </span>
              <span > </span>
              <span class="name">Z</span>
              <span class="m-left">e</span>
              <span class="m-left">e</span>
              <span class="m-left">s</span>
              <span class="m-left">h</span>
              <span class="m-left">a</span>
              <span class="m-left">n</span>
              {/* <br /> */}
              <span class="name">R</span>
              <span class="m-left">a</span>
              <span class="m-left">z</span>
              <span class="m-left">a</span>
              {/* <span class="m-left">r</span>
              <span class="m-left">i</span>
              <span class="m-left">n</span>
              <span class="m-left">g</span> */}
              <br />
              <span
                class="txt-type"
                data-wait="3000"
                data-words='["Software Developer", "Web Designer", "Web Developer", "App Developer" ]'
              ></span>
            </h1>
            <h2 class="tech">
                HTML/CSS | JavaScript | React | Ant Design | React Native
            </h2>
            <div class="desc">
              <p class="information">
                As a leader, it is important to not just see your own success,
                but focus on the success of others. -{" "}
                <span class="name">Sundar Pichai</span>
              </p>
            </div>

            <div class="media">
              <ul>
                <li>
                  <a
                    rel="noopener noreferrer"
                    href="https://www.linkedin.com/in/zeeshan-raza/"
                    target="_blank"
                  >
                    <i class="fab fa-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a
                    rel="noopener noreferrer"
                    href="mailto:zeeshanraza252627@gmail.com"
                    target="_blank"
                  >
                    <i class="fab fa-google"></i>
                  </a>
                </li>
                <li>
                  <a
                    rel="noopener noreferrer"
                    href="https://github.com/ZeeshanRaza25"
                    target="_blank"
                  >
                    {" "}
                    <i class="fab fa-github"></i>
                  </a>
                </li>
                <li>
                  <a
                    rel="noopener noreferrer"
                    href="https://twitter.com/ZEESHAN64641810"
                    target="_blank"
                  >
                    <i class="fab fa-twitter"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landingpage;

import React, { Component } from "react";
import SingleProject from "./SingleProject";

export class ResumeProject extends Component {
  render() {
    return (
      <div>
        <div className="card-content">
          <div className="card card-main" style={{ paddingTop: 30 }}>
            <h5>
              <strong
                style={{
                  fontWeight: "bold",
                  textTransform: "uppercase",
                  paddingLeft: 20,
                }}
              >
                Projects
              </strong>
            </h5>
            {/* <SingleProject
              type="Web App"
              name="Personal Portfolio"
              tech="React Js, Material-mdl, react-router-dom"
              description=" Used React framework (Reactjs), nodejs, yarn, Html5, CSS and UI components like Material UI to build personal portfolio with the help of open source platform netlify. Link: akumarportfolio.netlify.com"
            /> */}
            <SingleProject
              type="React Native"
              name="Hospital App"
              tech="React Native, Native Base"
              description="As my final year project, developed React Native based Application."
            />

            {/* <SingleProject
              type="Web App"
              name="Personal Portfolio"
              tech="React Js, Material-mdl, react-router-dom"
              description=" Used React framework (Reactjs), nodejs, yarn, Html5, CSS and UI components like Material UI to build personal portfolio with the help of open source platform netlify. Link: akumarportfolio.netlify.com"
            /> */}
          </div>
        </div>
      </div>
    );
  }
}

export default ResumeProject;

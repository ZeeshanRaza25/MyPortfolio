import React, { Component } from "react";
import SingleExperience from "./SingleExperience";

export class Experience extends Component {
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
                Experience
              </strong>
            </h5>
            <SingleExperience
              start="Mar 2020"
              end="Aug 2020"
              country="New York, NY"
              company="HomeBloc"
              position="Sofware Engieer Intern"
              description="Worked as a front end Web developer & design."

          />
            <SingleExperience
              start="Jun 2019"
              end="Jul 2019"
              country="Jersey City, NJ"
              company="Corp2Corp Inc."
              position="Software Engineer Intern"
              description="Built in-depth knowledge in the field of ReactNative, Reactjs, Material UI, and Bootstrap. Acquired working knowledge with google firebase for integration with website and handling databases. Using the knowledge to create my personal website/portfolio."
            />
            <SingleExperience
              start="Jul 2018"
              end="Aug 2018"
              country="New York, NY"
              company="WebDot Solution"
              position="Summer Intern"
              description="Worked as a front end Web developer & design. -Used HTML, CSS, Javascript and Reactjs, bootstrap framework in order to create the interface of the website. -learnt Database System skills (MySQL) along with web development skills while interning at this place with the help of senior design group members. Analysed some big data using MySQL"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Experience;

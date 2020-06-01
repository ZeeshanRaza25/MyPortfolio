import React, { Component } from "react";

export class About extends Component {
  render() {
    return (
      <div>
        <div className="card card-main">
          <div className="card-content">
            <h5 className="mt-bottom">
              <strong style={{ fontWeight: "bold" }}>ABOUT ME</strong>
            </h5>
            <h5
              className="black-text"
              style={{ fontSize: 21, paddingRight: 20 }}
            >
              Passionate and curious Information Technology student with a few
              years of web development experience along with developing skills 
              to become an efficient software Developer. a MERN-full Stack Web
              and Mobile Developer, a design and development expert with a keen
              sense of aesthetics. Experienced with all stages of the development
              cycle for dynamic web projects and android projects.Well-versed in 
              numerous programming languages including HTML5, CSS3, Javascript and
              database with Mongodb.Having well knowledge of NodeJS, ReactJS and
              React Native libraries.
              <br />
              <br />
              Interested in the field of MERN Stack Web and mobile Development, 
              Cloud Computing.Strong backgroundin project management and customer
              relations. Like a successful Person, I always believe in learning and
              remain up to date.
            </h5>
           

            {/* <h5 className="mt-bottom">
              <strong style={{ fontWeight: "bold" }}>Relevant Courses:</strong>
            </h5>
            <h5
              className="black-text"
              style={{ fontSize: 17, paddingRight: 20, fontWeight:'bold' }}
            >
              Software Engineering, Software Project Management, 
            </h5> */}
            <br />
            <hr style={{ borderTop: "1px solid 	#A9A9A9", width: "100%" }} />

            <h5 className="mt-bottom">
              <strong style={{ fontWeight: "bold" }}>EDUCATION</strong>
            </h5>

            <div className="row">
              <div style={{ marginLeft: 10 }}>
                <p
                  className="black year_exp white-text"
                  style={{
                    paddingRight: 10,
                    paddingLeft: 10,
                    borderRadius: 10,
                  }}
                >
                  Sep <strong>2016</strong> - <strong> Till Now </strong>
                </p>

                <h6
                  style={{
                    justifyContent: "end",
                    textTransform: "capitalize",
                    paddingLeft: 10,
                  }}
                >
                  Faisalabad, Pakistan
                </h6>
              </div>
              <div className="col s12 m8 l8 xl8">
                <blockquote className="no-pad">
                  <h6 className="no-pad mt-bottom">
                    <h4>University of Agriculture Faisalabad, Pakistan</h4>
                    <strong style={{ fontSize: 18, fontWeight: "bold" }}>
                      Continue Bachelor's Degree, Computer Science with CGPA - 3.10/4
                    </strong>
                  </h6>
                </blockquote>
              </div>
            </div>

            <div className="row">
              <div style={{ marginLeft: 10 }}>
                <p
                  className="black year_exp white-text"
                  style={{
                    paddingRight: 10,
                    paddingLeft: 10,
                    borderRadius: 10,
                  }}
                >
                  Aug <strong>2014</strong> - May <strong>2016</strong>
                </p>

                <h6
                  style={{
                    justifyContent: "end",
                    textTransform: "capitalize",
                    paddingLeft: 10,
                  }}
                >
                  Faisalabad, Pakistan
                </h6>
              </div>
              <div className="col s12 m8 l8 xl8">
                <blockquote className="no-pad">
                  <h6 className="no-pad mt-bottom">
                    <h4>GOVT Post Graduated College Faisalabad, Pakistan</h4>
                    <strong style={{ fontSize: 18, fontWeight: "bold" }}>
                    I had passed my higher Secondary education.
                    </strong>
                  </h6>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;

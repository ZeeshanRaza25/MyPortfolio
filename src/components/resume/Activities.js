import React, { Component } from "react";

export class Activities extends Component {
  render() {
    return (
      <div>
        <div className="card card-main">
          <div className="card-content" style={{paddingRight:60}}>
            <h5>
              <strong
                style={{ fontWeight: "bold", textTransform: "uppercase" }}
              >
                Activities
              </strong>
            </h5>

            <div className="row">
              <div style={{ marginLeft: 10 }}>
                <p
                  className="orange year_exp white-text"
                  style={{
                    paddingRight: 10,
                    paddingLeft: 10,
                    borderRadius: 10,
                  }}
                >
                  Aug <strong>2017</strong> - May <strong>2021</strong>
                </p>

                <h6
                  style={{
                    justifyContent: "end",
                    textTransform: "capitalize",
                    paddingLeft: 10,
                  }}
                >
                  Colombo, Sri Lanka
                </h6>
              </div>
              <div className="col s12 m8 l8 xl8">
                <blockquote className=" no-pad">
                  <h6 className="no-pad mt-bottom">
                    <h4>National Institute of Technology, Kurukshetra</h4>
                    <h6 style={{ fontSize: 16, fontWeight: "bold" }}>
                      (2017-2018)- Photography Club-(NTT), Designing &
                      Management in the Cultural Society-(Music & Dramatics
                      Club) Member of the college's Dance Society. (2018-19) -
                      Designing & Management in the Cultural Society-(Music &
                      Dramatics Club), Member of the college's Dance Society
                    </h6>
                  </h6>
                </blockquote>
              </div>
            </div>

            <div className="row">
              <div style={{ marginLeft: 10 }}>
                <p
                  className="orange year_exp white-text"
                  style={{
                    paddingRight: 10,
                    paddingLeft: 10,
                    borderRadius: 10,
                  }}
                >
                  Dec <strong>2013</strong> - May <strong>2017</strong>
                </p>

                <h6
                  style={{
                    justifyContent: "end",
                    textTransform: "capitalize",
                    paddingLeft: 10,
                  }}
                >
                  Colombo, Sri Lanka
                </h6>
              </div>
              <div className="col s12 m8 l8 xl8">
                <blockquote className=" no-pad">
                  <h6 className="no-pad mt-bottom">
                    <h4>Overseas School Of Colombo, Sri Lanka</h4>
                    <h6 style={{ fontSize: 16, fontWeight: "bold" }}>
                      Deputy Head of Information Technology for The Colombo
                      Model United Nations (COMUN) (2017), Delegate for COMUN
                      (2014,2016), Founder and Leader of a Community Service
                      group - CARE FOR PAWS (2017), South Asian International
                      Sports Association (SAISA)- Badminton Team (2016-2017),
                      Volunteer in a Community Service - RCCI (2016), Alzheimers
                      (2014,2015) Sports Activities (2014-2017) Cricket,
                      Basketball, Volleyball, Badminton
                    </h6>
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

export default Activities;

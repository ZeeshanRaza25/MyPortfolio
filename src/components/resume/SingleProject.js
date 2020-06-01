import React, { Component } from "react";

export class SingleProject extends Component {
  render() {
    return (
      <div>
        <div className="card-content">
          <div className="row">
            <div style={{ marginLeft: 10 }}>
              <p
                className="blue year_exp white-text"
                style={{
                  paddingRight: 10,
                  paddingLeft: 10,
                  borderRadius: 10,
                  width:"12rem"
                }}
              >
                {this.props.type}
              </p>
            </div>
            <div className="col s12 m8 l8 xl8">
              <blockquote className="no-pad">
                <h6 className="no-pad mt-bottom">
                  <h4>{this.props.name}</h4>
                  <strong style={{ fontSize: 18, fontWeight: "bold" }}>
                    {this.props.tech}
                  </strong>
                </h6>
                <h6 style={{paddingRight:60}}>{this.props.description}</h6>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SingleProject;

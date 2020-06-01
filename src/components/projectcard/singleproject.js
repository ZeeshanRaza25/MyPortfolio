/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from "react";
import "./singleprojectstyle.css";

export class SingleProject extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="card new-card1">
            <div className="card-image waves-effect waves-block waves-light overflow">
              <img
                className=" card-img-top image1 activator "
                src={this.props.image}
                alt="image"
              />
            </div>
            <div className="card-content">
              <span className="card-title activator grey-text text-darken-4">
                {this.props.title}
                <i className="material-icons right">more_vert</i>
              </span>
              <p>{this.props.content}</p>
            </div>
            <div className=" btn btn1 btn-outline-success">
              <a href="#">
                <i class="fab fa-github"></i>
                {this.props.button}
              </a>
            </div>
            <div className="card-reveal">
              <span className="card-title grey-text text-darken-4">
                <i className="material-icons right">close</i>
                {this.props.title}
              </span>
              <p>{this.props.content}</p>
              <div class="container-chip chip2">
                <div class="chip">
                  <img src={this.props.chipimg1} />
                  {this.props.chip1}
                </div>
                <div class="chip">
                  <img src={this.props.chipimg2} />
                  {this.props.chip2}
                </div>
                <div class="chip">
                  <img src={this.props.chipimg3} />
                  {this.props.chip3}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SingleProject;

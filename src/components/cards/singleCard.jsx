/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from 'react';
import './card-style.css'


export default class CardSingle extends Component {
    render() {
        return (
            <div>
                <div className="card text-center shadow">

                    <div className="overflow">
                        <img src={this.props.imgsrc} alt=" image1" className="card-img-top" />

                    </div>
                    <div class="container-chip">
                        <div class="chip">
                            <img src={this.props.chipimg1} alt="image" />
                                {this.props.chip1}
                        </div>
                        <div class="chip">
                            <img src={this.props.chipimg2} alt="image" />
                                {this.props.chip2}
                        </div>
                        <div class="chip">
                            <img src={this.props.chipimg3} alt="image" />
                                {this.props.chip3}
                        </div>
                    </div>

                    <div className="card-body text-dark">
                        <h4 className="card-title">{this.props.title}</h4>
                        <p className="card-text text-secondary">
                            {this.props.paragraph}
                        </p>
                        <a href="/resume" className="btn btn-outline-success">
                            {this.props.button}
                        </a>

                    </div>
                </div>
            </div>
        );
    }

}
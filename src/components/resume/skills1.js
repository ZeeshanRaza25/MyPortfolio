import React, { Component } from 'react'

export class Skills extends Component {
    render() {
        return (
            <div>
                <div className="card card-main">
                    <div className="card-content">
                        <h5>
                        <strong style={{fontWeight:'bold', textTransform:'uppercase'}}>Skills</strong>
                        </h5>
                        <div style={{paddingLeft:10}}>
                        <div className="row mt-top">
                            <p>HTML5 & CSS</p>
                            <div className="progress grey lighten-1">
                                <div className="determinate red" style={{width: '95%'}}/>
                            </div>
                        </div>

                        <div className="row mt-top">
                            <p>JavaScript</p>
                            <div className="progress grey lighten-1">
                                <div className="determinate red" style={{width: '80%'}}/>
                            </div>
                        </div>

                        <div className="row mt-top">
                            <p>React & ReactNative</p>
                            <div className="progress grey lighten-1">
                                <div className="determinate red" style={{width: '75%'}}/>
                            </div>
                        </div>

                        <div className="row mt-top">
                            <p>Node JS</p>
                            <div className="progress grey lighten-1">
                                <div className="determinate red" style={{width: '60%'}}/>
                            </div>
                        </div>

                        {/* <div className="row mt-top">
                            <p>MySQL</p>
                            <div className="progress grey lighten-1">
                                <div className="determinate red" style={{width: '80%'}}/>
                            </div>
                        </div>

                        <div className="row mt-top">
                            <p>C++</p>
                            <div className="progress grey lighten-1">
                                <div className="determinate red" style={{width: '80%'}}/>
                            </div>
                        </div> */}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Skills

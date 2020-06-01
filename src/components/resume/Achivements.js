import React, { Component } from 'react'

export class Achivements extends Component {
    render() {
        return (
            <div>
              <div className="card card-main">
                  <div className="card-content">
                      <h5><strong style={{fontWeight:'bold', textTransform:'uppercase'}}>EDUCATIONS</strong></h5>
                      <table className="striped">
                          <tbody>
                              <tr style={{fontSize:20}}>
                                  <th>Achivements</th>
                                  <th>Date</th>
                              </tr>
                              <tr>
                                  <td>Web Development</td>
                                  <td>Jan 2018</td>
                              </tr>
                              <tr>
                                  <td>Web Development</td>
                                  <td>Jan 2018</td>
                              </tr>
                          </tbody>
                      </table>
                  </div>
              </div>
            </div>
        )
    }
}

export default Achivements
import React, { Component } from "react";
import BackgroundCard from './cards/backgroundCard'

export class Background extends Component {
  render() {
    return (
      <div>
        <div class="nav-content">
          <ul class="tabs tabs-transparent">
            <li class="tab">
              <a href="/Interest">Interests</a>
            </li>
            <li class="tab">
              <a href="/Background">Background</a>
            </li>
          </ul>
        </div>
        <div>
        <BackgroundCard/>
        </div>
      </div>
    );
  }
}

export default Background;

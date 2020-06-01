import React, { Component } from "react";
import Cards from "./cards/cards";

export class Interest extends Component {
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
          <Cards />
        </div>
      </div>
    );
  }
}

export default Interest;

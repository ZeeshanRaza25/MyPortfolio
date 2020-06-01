/* eslint-disable no-unused-vars */
/* eslint-disable no-native-reassign */
 /*global arrayContainer:true, SliderInstance:true, DomObjects:true, document, Slider*/

import React, { Component } from "react";
import CardSingle from "./singleCard";
import "./card-style.css";


export default class Cards extends Component {
  render() {
    return (
      <div className="container1">
        <div className="container-fluid d-flex justify-content-center">
          <h2 style={{marginTop: 100, color: '#006557'}}>Stay tuned!</h2>
          {/* <div className="row">
            <div className="col-md-4">
              <CardSingle
                imgsrc={URL=('https://images.unsplash.com/photo-1550645612-83f5d594b671?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80')}
                title="Programming"
                paragraph="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown 
                printer took a galleye release 
                of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                button="Read More.."
                chipimg1={URL=('https://images.unsplash.com/photo-1550645612-83f5d594b671?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80')}
                chip1="React"
                chipimg2={URL=('https://images.unsplash.com/photo-1550645612-83f5d594b671?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80')}
                chip2="JavaScript" 
                chipimg3={URL=('https://images.unsplash.com/photo-1550645612-83f5d594b671?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80')}
                chip3="Python"
              />
            </div>
            <div className="col-md-4">
              <CardSingle
              imgsrc={URL=('https://images.unsplash.com/photo-1566055972289-c52022ae23b7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1052&q=80')}
                title="Photography"
                paragraph="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown 
                printer took a galleye release 
                of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                button="Read More.."
                chipimg1={URL=('https://images.unsplash.com/photo-1530521954074-e64f6810b32d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80')}
                chip1="Travelling"
                chipimg2={URL=('https://images.unsplash.com/photo-1500111709600-7761aa8216c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80')}
                chip2="landscape" 
                chipimg3={URL=('https://images.unsplash.com/photo-1470219556762-1771e7f9427d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80')}
                chip3="Structure"
              />
            </div>
            <div className="col-md-4">
              <CardSingle
                imgsrc={URL=('https://images.unsplash.com/photo-1526772662000-3f88f10405ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80')}
                title="Traveling"
                paragraph="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown 
                printer took a galleye release 
                of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                button="Read More.."
                chipimg1={URL=('https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80')}
                chip1="New York"
                chipimg2={URL=('https://images.unsplash.com/photo-1526772662000-3f88f10405ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80')}
                chip2="Colombo" 
                chipimg3={URL=('https://images.unsplash.com/photo-1526772662000-3f88f10405ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80')}
                chip3="Dhaka"
              />
            </div>
          </div>
        </div>

        <div className="container-fluid d-flex justify-content-center">
          <div className="row">
            <div className="col-md-4">
              <CardSingle
               imgsrc={URL=('https://images.unsplash.com/photo-1552435053-01c010307582?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1125&q=80')}
                title="Cricket"
                paragraph="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown 
                printer took a galleye release 
                of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                button="Read More..."
                chipimg1={URL=('https://images.unsplash.com/photo-1552435053-01c010307582?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1125&q=80')}
                chip1="MS Dhoni"
                chipimg2={URL=('https://images.unsplash.com/photo-1552435053-01c010307582?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1125&q=80')}
                chip2="India" 
                chipimg3={URL=('https://images.unsplash.com/photo-1552435053-01c010307582?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1125&q=80')}
                chip3="Cricket"
              />
            </div>
            <div className="col-md-4">
              <CardSingle
                imgsrc={URL=('https://images.unsplash.com/photo-1521537634581-0dced2fee2ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80')}
                title="Badminton"
                paragraph="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown 
                printer took a galleye release 
                of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                button="Read More.."
                chipimg1={URL=('https://images.unsplash.com/photo-1550645612-83f5d594b671?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80')}
                chip1="React"
                chipimg2={URL=('https://images.unsplash.com/photo-1550645612-83f5d594b671?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80')}
                chip2="JavaScript" 
                chipimg3={URL=('https://images.unsplash.com/photo-1550645612-83f5d594b671?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80')}
                chip3="Python"
              />
            </div>
            <div className="col-md-4">
              <CardSingle
                imgsrc={URL=('https://images.unsplash.com/photo-1444212477490-ca407925329e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80')}
                title="Care for Paws (Volunteer)"
                paragraph="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown 
                printer took a galleye release 
                of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                button="Read More.."
                chipimg1={URL=('https://images.unsplash.com/photo-1550645612-83f5d594b671?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80')}
                chip1="React"
                chipimg2={URL=('https://images.unsplash.com/photo-1550645612-83f5d594b671?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80')}
                chip2="JavaScript" 
                chipimg3={URL=('https://images.unsplash.com/photo-1550645612-83f5d594b671?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80')}
                chip3="Python"
              />
            </div>
          </div> */}
        </div>
      </div>
    );
  }
}

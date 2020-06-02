/* eslint-disable no-unused-vars */
/* eslint-disable no-native-reassign */
 /*global arrayContainer:true, SliderInstance:true, DomObjects:true, document, Slider*/

import React, { Component } from "react";
import SingleProject from './singleproject';
import "../cards/card-style.css";
import './singleprojectstyle.css'
import img3 from '../../assets/foodini.png';
import img4 from '../../assets/covid.png';

export default class AllProject extends Component {
  render() {
    return (
      <div className="container">
        <div className="container-fluid d-flex justify-content-center">
          <h2 style={{marginTop: 100, color: '#006557'}}>Projects are on the way!</h2>
          {/* <div className="row">
            <div className="col-md-4">
             <SingleProject 
                image={img1}
                title="Personal Website 1.0"
                content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown 
                printer took a galleye release 
                of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                button="GITHUB"
                chipimg1={URL=('https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80')}
                chip1="New York"
                chipimg2={URL=('https://images.unsplash.com/photo-1526772662000-3f88f10405ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80')}
                chip2="Colombo" 
                chipimg3={URL=('https://images.unsplash.com/photo-1526772662000-3f88f10405ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80')}
                chip3="Dhaka"
            /> 
            </div>
            <div className="col-md-4">
            <SingleProject 
                image={URL=('https://images.unsplash.com/photo-1526379095098-d400fd0bf935?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80')}
                title="Python Food App"
                content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown 
                printer took a galleye release 
                of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                button="GITHUB"
                chipimg1={URL=('https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80')}
                chip1="New York"
                chipimg2={URL=('https://images.unsplash.com/photo-1526772662000-3f88f10405ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80')}
                chip2="Colombo" 
                chipimg3={URL=('https://images.unsplash.com/photo-1526772662000-3f88f10405ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80')}
                chip3="Dhaka"
            />  
              
            </div>
            <div className="col-md-4">
            <SingleProject 
                image={img3}
                title="FOODINI App"
                content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown 
                printer took a galleye release 
                of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                button="GITHUB"
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
             <SingleProject 
                image={img4}
                title="Covid Tracker"
                content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown 
                printer took a galleye release 
                of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                button="GITHUB"
                chipimg1={URL=('https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80')}
                chip1="New York"
                chipimg2={URL=('https://images.unsplash.com/photo-1526772662000-3f88f10405ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80')}
                chip2="Colombo" 
                chipimg3={URL=('https://images.unsplash.com/photo-1526772662000-3f88f10405ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80')}
                chip3="Dhaka"
            /> 
            </div>
            <div className="col-md-4">
            <SingleProject 
                image={URL=('https://images.unsplash.com/photo-1560472355-109703aa3edc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80')}
                title="WordPress Websites"
                content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown 
                printer took a galleye release 
                of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                button="GITHUB"
                chipimg1={URL=('https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80')}
                chip1="New York"
                chipimg2={URL=('https://images.unsplash.com/photo-1526772662000-3f88f10405ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80')}
                chip2="Colombo" 
                chipimg3={URL=('https://images.unsplash.com/photo-1526772662000-3f88f10405ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80')}
                chip3="Dhaka"
            />  
              
            </div>
            <div className="col-md-4">
            <SingleProject 
                image={URL=('https://images.unsplash.com/photo-1527430253228-e93688616381?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1491&q=80')}
                title="Python Chatbot"
                content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown 
                printer took a galleye release 
                of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                button="GITHUB"
                chipimg1={URL=('https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80')}
                chip1="New York"
                chipimg2={URL=('https://images.unsplash.com/photo-1526772662000-3f88f10405ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80')}
                chip2="Colombo" 
                chipimg3={URL=('https://images.unsplash.com/photo-1526772662000-3f88f10405ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80')}
                chip3="Dhaka"
            />   
              
            </div>
          </div> */}
        </div>
        

        
      </div>
    );
  }
}

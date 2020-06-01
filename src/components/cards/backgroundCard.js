import React, { Component } from 'react'
import CardSingle from "./singleCard";
import "./card-style.css";


export class BackgroundCard extends Component {
    render() {
        return (
            <div className="container1">
            <div className="container-fluid d-flex justify-content-center">
              <div className="row">
                <div className="col-md-4">
                  <CardSingle
                     imgsrc={URL=('https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80')}
                     title="INDIA"
                    paragraph="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown 
                    printer took a galleye release 
                    of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                    button="Read More.."
                    chipimg1={URL=('https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80')}
                chip1="React"
                chipimg2={URL=('https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80')}
                chip2="JavaScript" 
                chipimg3={URL=('https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80')}
                chip3="Python"
                  />
                </div>
                <div className="col-md-4">
                  <CardSingle
                     imgsrc={URL=('https://images.unsplash.com/photo-1583429891508-015ef9cd958e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=656&q=80')}
                    title="Bangaldesh"
                    paragraph="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown 
                    printer took a galleye release 
                    of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                    button="Read More.."
                    chipimg1={URL=('https://images.unsplash.com/photo-1583429891508-015ef9cd958e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=656&q=80')}
                chip1="React"
                chipimg2={URL=('https://images.unsplash.com/photo-1583429891508-015ef9cd958e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=656&q=80')}
                chip2="JavaScript" 
                chipimg3={URL=('https://images.unsplash.com/photo-1583429891508-015ef9cd958e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=656&q=80')}
                chip3="Python"
                  />
                </div>
                <div className="col-md-4">
                  <CardSingle
                     imgsrc={URL=('https://images.unsplash.com/photo-1559038267-bfa6d8d3a160?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80')}
                    title="Sri Lanka"
                    paragraph="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown 
                    printer took a galleye release 
                    of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                    button="Read More.."
                    chipimg1={URL=('https://images.unsplash.com/photo-1559038267-bfa6d8d3a160?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80')}
                chip1="React"
                chipimg2={URL=('https://images.unsplash.com/photo-1559038267-bfa6d8d3a160?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80')}
                chip2="JavaScript" 
                chipimg3={URL=('https://images.unsplash.com/photo-1559038267-bfa6d8d3a160?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80')}
                chip3="Python"
                  />
                </div>
              </div>
            </div>
    
           
          </div>
        )
    }
}

export default BackgroundCard

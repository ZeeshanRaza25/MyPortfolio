import React, { Component } from 'react'
import im2 from '../../assets/zeeshan.jpg'


export class Profile extends Component {
    render() {
        return (
            <div>
               <div className="card card-profile">
                   <div >
                       <img classNamee="activator" src={im2} alt="AMIT" style={{width: 250, paddingTop:10, display: 'block', margin:'Auto', borderRadius: '50%' }} />
                   </div>
                <div className="card-content content-profile">                
                    <span className="card-title activator grey-text text-darken-4" style={{display: 'flex', marginBottom: 1, fontSize:20}}>
                        ZEESHAN RAZA
                    </span>
                    <span className="card-title" style={{ fontSize:16}} >Full Stack Web Developer</span>
                    <span className="card-text grey-text text-darken-4" style={{ fontSize:14, fontWeight:'bold', fontStyle:'italic' }}>
                    Contact Me:
                </span>
                <p className="flex-container" style={{display: 'flex', paddingRight:20, paddingLeft: 20, justifyContent:'space-evenly', justifySelf:'center', fontSize:20}}>
                    <a href="https://www.linkedin.com/in/zeeshan-raza/"><i className=' fab fa-linkedin grey-text text-darken-3 social-style'></i></a>
                    <a href="mailto:zeeshanraza252627@gmail.com"><i className=' fab fa-google grey-text text-darken-3 social-style'></i></a>
                    <a href="https://github.com/ZeeshanRaza25"><i className=' fab fa-github grey-text text-darken-3 social-style'></i></a>
                    <a href="https://twitter.com/ZEESHAN64641810"><i className=' fab fa-twitter grey-text text-darken-3 social-style'></i></a>
                </p>
                </div>
               </div>
            </div>
        )
    }
}

export default Profile

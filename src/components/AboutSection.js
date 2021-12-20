import * as React from "react"
import PropTypes from "prop-types"



const AboutSection = ({ children }) => {

    return (
        <div className = 'about-section-wrapper' style = {wrapperStyle}>

            <div className  = 'about-container' style = {containerStyle}>
                <div className = 'about-text' style = {textContainerStyle}>
                    <h3 style = {aboutHeadingStyle} className = 'd-flex'>About me <hr style = {headingLineStyle} /></h3>
                    <p style = {aboutSubtextStyle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem sunt maiores voluptas aliquid reiciendis labore, quis ipsam ad commodi voluptatibus perspiciatis sint molestias totam neque porro magnam ratione numquam rerum. <br /> <br /> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur qui perferendis cum culpa mollitia excepturi.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur qui perferendis cum culpa mollitia excepturi. </p>
                    <h6 className = 'mt-4'>My tech stack</h6>
                    <div className = 'technologies-container d-flex ' style = {techContainerStyle}>
                        <div style = {{flex:'1'}}>
                            <p style = {technologiesStyle}>Javacript</p>
                            <p style = {technologiesStyle}>React</p>
                            <p style = {technologiesStyle}>Firebase</p>
                           
                        </div>
                        <div style = {{flex:'1'}}>
                            <p style = {technologiesStyle}>Webflow</p>
                            <p style = {technologiesStyle}>Mongo.db</p>
                            <p style = {technologiesStyle}>Puppeteer</p>
                        </div>
                    </div>
                </div>
                <div className = 'about-image-wrapper' style = {imageContainerStyle}>
                    <img src = '/profile.jpeg' style = {imageStyle} className = 'about-image'></img>
                </div>
            </div>
        </div>
    )
    
}

const wrapperStyle = {
    height:'100vh',
    paddingBottom:'100px',
    paddingTop:'100px',
   
}

const containerStyle = {
 display:'flex',
 height:'400px'
}
const textContainerStyle = {
 flex:'1',
}
const imageContainerStyle = {
 flex:'1',
 justifyContent:'center',
 alignItems:'center',
 display:'flex'
}

const aboutHeadingStyle = {
    letterSpacing:'1px',
    marginBottom:'40px',
    alignItems:'center'
}

const aboutSubtextStyle = {
        color:'rgb(155,155,155)',
        fontSize:'18px'
}

const headingLineStyle = {
    height:'3px',
    width:'20%',
    marginLeft:'20px',
    color:'#802bb1',
    opacity:'0.7'
}

const imageStyle = {
    width:'300px',
    height:'300px',
    borderRadius:'7px',
}

const techContainerStyle = {
    width:'60%',
    marginTop:'30px'
}

const technologiesStyle = {
    marginTop:'3px',
    marginBottom:'3px',
    fontSize:'15px',
    letterSpacing:'1px',
    color:'rgb(155,155,155)'
}

AboutSection.propTypes = {
  children: PropTypes.node.isRequired,
}

export default AboutSection

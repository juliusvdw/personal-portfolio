import * as React from "react"
import PropTypes from "prop-types"



const AboutSection = ({ children }) => {

    return (
        <div className = 'about-section-wrapper' style = {wrapperStyle}>

            <div className  = 'about-container' style = {containerStyle}>
                <div className = 'about-text' style = {textContainerStyle}>
                    <h3 style = {aboutHeadingStyle} className = 'd-flex'>About me <hr style = {headingLineStyle} /></h3>
                    <p style = {aboutSubtextStyle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem sunt maiores voluptas aliquid reiciendis labore, quis ipsam ad commodi voluptatibus perspiciatis sint molestias totam neque porro magnam ratione numquam rerum. <br /> <br /> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur qui perferendis cum culpa mollitia excepturi minima cupiditate nam deserunt facere itaque, non ratione saepe earum nobis quo omnis suscipit. Nulla!</p>
                </div>
                <div className = 'about-image' style = {imageContainerStyle}>

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
 flex:'1'
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

AboutSection.propTypes = {
  children: PropTypes.node.isRequired,
}

export default AboutSection

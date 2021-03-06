import * as React from "react"
import PropTypes from "prop-types"

import Navbar from './Navbar'
import HeroSection from './HeroSection'
import AboutSection from './AboutSection'
import ProjectsSection from "./ProjectsSection"

const ContentBody = ({ children }) => {

    return (
        <div className = 'content-body-wrapper' style = {wrapperStyle}>

            <Navbar />
            <HeroSection />
            <AboutSection />
            <ProjectsSection />
        </div>
    )
    
}

const wrapperStyle = {
    minHeight:'100vh',
    width:'calc(100vw - 100px)',
    backgroundColor:'#000',
    marginLeft:'100px',
    paddingLeft:'120px',
    paddingRight:'120px'
}

ContentBody.propTypes = {
  children: PropTypes.node.isRequired,
}

export default ContentBody

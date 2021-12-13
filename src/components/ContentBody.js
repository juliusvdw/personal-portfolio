import * as React from "react"
import PropTypes from "prop-types"

import Navbar from './Navbar'
import HeroSection from './HeroSection'

const ContentBody = ({ children }) => {

    return (
        <div className = 'content-body-wrapper' style = {wrapperStyle}>

            <Navbar />
            <HeroSection />
        </div>
    )
    
}

const wrapperStyle = {
    height:'100vh',
    width:'calc(100vw - 100px)',
    backgroundColor:'#000',
    marginLeft:'100px'
}

ContentBody.propTypes = {
  children: PropTypes.node.isRequired,
}

export default ContentBody

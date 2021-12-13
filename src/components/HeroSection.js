import React, {useState} from "react"
import PropTypes from "prop-types"
import Particles from "react-tsparticles";
import ParticlesBackground from "./ParticlesBackground";



const HeroSection = ({ children }) => {
    
    
   

    return (
        <>
        <div className = 'hero-wrapper' style = {heroStyle}>

            <div className = 'hero-text-container' style = {heroTextStyle}>
                <p style = {introSmallStyle}>Hi, I'm Julius.</p>
                <h1 style = {heroNameStyle}>I build things <span className = 'hero-underline' >for the web.</span> </h1>
                <p style = {subTextStyle}>I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building accessible, human-centered products at Upstatement.</p>
                <div className = 'btn btn-primary hero-btn'>View My Projects</div>
            </div>
        </div>
        </>
    )
    
}


const heroStyle = {
    height:'calc(100vh - 80px)'

}

const introSmallStyle = {
    fontSize: '65px',
    letterSpacing: '1px',
    margin:'0px',
    lineHeigh:'65px'
}

const heroNameStyle = {
    fontSize:'65px',
    letterSpacing:'1px',
    margin:'0px',
    lineHeight:'65px'
}

const heroTextStyle = {
    paddingTop:'140px'
}

const subTextStyle = {
    color:'#9b9b9b',
    maxWidth:'540px',
    marginTop:'30px',
    fontSize:'15px',
    letterSpacing:'1px'
}

HeroSection.propTypes = {
  children: PropTypes.node.isRequired,
}

export default HeroSection
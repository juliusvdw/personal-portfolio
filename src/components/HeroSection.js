import React from "react"
import PropTypes from "prop-types"
import Particles from "react-tsparticles";
import ParticlesBackground from "./ParticlesBackground";



const HeroSection = ({ children }) => {
    
    const particlesInit = (main) => {
        console.log(main);
    
        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
      };
    
      const particlesLoaded = (container) => {
        console.log(container);
      };

    return (
        <>
        <div className = 'hero-wrapper' style = {heroStyle}>
            <ParticlesBackground />
        </div>
        </>
    )
    
}


const heroStyle = {
    height:'cacl(100vh - 80px)'

}

HeroSection.propTypes = {
  children: PropTypes.node.isRequired,
}

export default HeroSection

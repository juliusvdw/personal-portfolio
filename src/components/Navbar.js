import * as React from "react"
import PropTypes from "prop-types"

const Navbar = ({ children }) => {

    return (
        <div id = 'navbar'   style = {navStyle}>
            <div className = 'navbar-links  text-white d-flex' style = {linksContainerStyle}>
                <a href = ''><span style = {linkStyle} className = 'navbar-link'>About</span> </a>
                <a href = ''><span style = {linkStyle} className = 'navbar-link'>Contact</span> </a>
                <a href = ''><span style = {linkStyle} className = 'navbar-link'>Projects</span> </a>
                
            </div>
        </div>
    )
    
}

const navStyle = {
    height:'80px',
    width:'100%',
    backgroundColor:'#000',
    paddingTop:'50px'
}

const linksContainerStyle = {
   fontSize:'15px',
   width:'250px',
   justifyContent:'flex-end',
   position:'absolute',
   right:'80px',
   zIndex:'998'
}

const linkStyle = {
    marginLeft:'30px'
}

Navbar.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Navbar

import * as React from "react"
import PropTypes from "prop-types"

const Navbar = ({ children }) => {

    return (
        <div id = 'navbar'   style = {navStyle}>
            <div className = 'navbar-links  text-white d-flex' style = {linksContainerStyle}>
                <span style = {linkStyle}>About</span>
                <span style = {linkStyle}>Contact</span>
                <span style = {linkStyle}>Projects</span>
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
   right:'80px'
}

const linkStyle = {
    marginLeft:'30px'
}

Navbar.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Navbar

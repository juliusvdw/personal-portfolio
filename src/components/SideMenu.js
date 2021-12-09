import * as React from "react"
import PropTypes from "prop-types"

const SideMenu = ({ children }) => {

    return (
        <div className = 'side-menu-wrapper' style = {wrapperStyle}>

        </div>
    )
    
}

const wrapperStyle = {
    height:'100vh',
    width:'100px',
    backgroundColor:'#000',
    position:'fixed',
    borderRight: '1px solid hsla(0, 0%, 100%, 0.2)'
}

SideMenu.propTypes = {
  children: PropTypes.node.isRequired,
}

export default SideMenu

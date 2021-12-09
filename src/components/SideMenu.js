import * as React from "react"
import PropTypes from "prop-types"

const SideMenu = ({ children }) => {

    return (
        <div className = 'side-menu-wrapper' style = {wrapperStyle}>
            <a href = '/' style = {logoStyle}>J</a>
            <div id = 'hamburger-icon'>
            <i class="bi bi-list" style = {iconStyle}></i>
            </div>

            <div className = 'menu-socials' style = {socialsStyle}>
            <i className=" mt-3 bi bi-github"></i>
            <i className=" mt-3 bi bi-linkedin"></i>
            </div>
        </div>
    )
    
}

const wrapperStyle = {
    height:'100vh',
    width:'100px',
    backgroundColor:'#000',
    position:'fixed',
    borderRight: '1px solid hsla(0, 0%, 100%, 0.2)',
    paddingTop:'45px',
    paddingBottom:'45px',
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'space-between'
}

const logoStyle = {
    fontSize:'28px',
    color:'white'
}

const iconStyle = {
    fontSize:'34px',
    color:'white',
    transition:'opacity 0.3s '
}

const socialsStyle = {
    color:'white',
    fontSize:'22px',
    display:'flex',
    flexDirection:'column'
}

SideMenu.propTypes = {
  children: PropTypes.node.isRequired,
}

export default SideMenu

import React, {useState}from "react"
import PropTypes from "prop-types"


const SideMenu = ({ children }) => {

    const [menuOpen, setMenuopen] = useState(false)

    const handleMenuClick = () => {

        const menu = document.querySelector('.side-menu-wrapper');

        if(!menuOpen) {
            menu.style.transform = 'translateX(0)'
            setMenuopen(true)
        } else {
            menu.style.transform = 'translateX(calc(-100vw + 100px))'
            setMenuopen(false)
        }

    }

    return (
        <>
        <div className = 'side-menu-wrapper' style = {wrapperStyle}>

            <div className = 'side-menu-large-section' style = {largeSectionStyle}>

                <div className = 'side-menu-section' style = {sideMenuSectionStyle}>
                        Home
                    </div>
        
                    <div className = 'side-menu-section' style = {sideMenuSectionStyle}>
                        Projects
                    </div>
        
                    <div className = 'side-menu-section' style = {sideMenuSectionStyle}>
                        Contact
                    </div>

            </div>

            

        <div className = 'side-menu-right-wrapper' style = {rightWrapperStyle}>
            <a href = '/' style = {logoStyle}>J</a>
            <div id = 'hamburger-icon' onClick = {()=> handleMenuClick()}>
            <i class="bi bi-list" style = {iconStyle}></i>
            </div>

            <div className = 'menu-socials' style = {socialsStyle}>
            <i className=" mt-3 bi bi-github"></i>
            <i className=" mt-3 bi bi-linkedin"></i>
            </div>
        </div>

        </div>
        
        </>
    )
    
}


const wrapperStyle = {
    height:'100vh',
    width:'100vw',
    display:'flex',
    position:'absolute',
    zIndex:'999',
    backgroundColor:'#000',
    transform: 'translateX(calc(-100vw + 100px))',
    transition:'0.4s ease'
}
const rightWrapperStyle = {
    backgroundColor:'#000',
    height:'100%',
    position:'absolute',
    borderRight: '1px solid hsla(0, 0%, 100%, 0.2)',
    paddingTop:'45px',
    paddingBottom:'45px',
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'space-between',
    zIndex:'999',
    width:'100px',
    right:'0'
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

const largeSectionStyle = {
    width: 'calc(100% - 100px)',
    display:'flex'

}
const sideMenuSectionStyle = {
    flex:'1',
    borderRight:'1px solid rgba(255, 255, 255, 0.2)',
    height:'100%',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    fontSize:'68px',
    fontWeight:'300',
    color:'hsla(0, 0%, 100%, 0.3)',
    letterSpacing:'2px',
    transition:'0.3s'
}

SideMenu.propTypes = {
  children: PropTypes.node.isRequired,
}

export default SideMenu

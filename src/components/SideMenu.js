import React, {useState}from "react"
import PropTypes from "prop-types"


const SideMenu = ({ children }) => {

    const [menuOpen, setMenuopen] = useState(false)
    const [lightMode, setLightMode] = useState(false)

    //Handle menu hamburger click
    const handleMenuClick = (destinationId) => {

        const menu = document.querySelector('.side-menu-wrapper');
        const hamburger = document.querySelector('#hamburger-icon')

        if(!menuOpen) {
            menu.style.transform = 'translateX(0)';
            setMenuopen(true)
            setTimeout(() => {
                hamburger.classList.add('open')

            },500)
        } else {
            menu.style.transform = 'translateX(calc(-100vw + 100px))'
            setMenuopen(false)
            setTimeout(() => {
                hamburger.classList.remove('open')

            },500)
        }

    }

    //Handle link click 
    const handleLinkClick = (destinationId) => {

        const menu = document.querySelector('.side-menu-wrapper');
        const hamburger = document.querySelector('#hamburger-icon')
        //Close menu
        menu.style.transform = 'translateX(calc(-100vw + 100px))'
        setMenuopen(false)
            setTimeout(() => {
                hamburger.classList.remove('open')

            },500)
            //Scroll to destination
        setTimeout(() => {
            let destination = document.querySelector(destinationId)
            destination.scrollIntoView({
                behaviour:'smooth'
            })
        },300)
    }

    //Handle Light switch click 
    const handleLightSwitch = () => {

        setLightMode(!lightMode)

        //Move light-slider if lightmode == true
        const lightSlider = document.querySelector('.light-slider')
        if(!lightMode){
            lightSlider.style.transform = 'translateX(25px)'
            lightSlider.style.backgroundColor = '#000'
        } else {
            lightSlider.style.transform = 'translateX(0)'
            lightSlider.style.backgroundColor = 'rgb(200,200,200)'
        }


        //target elements to be changed
        const contentBody = document.querySelector('.content-body-wrapper');
        const navBar = document.querySelector('#navbar');
        const sideMenu = document.querySelector('.side-menu-wrapper');
        const sideMenuRight = document.querySelector('.side-menu-right-wrapper');
        const menuSocials = document.querySelector('.menu-socials');
        const sideMenuSection = document.querySelectorAll('.side-menu-section');
        const navbarLinks = document.querySelectorAll('.navbar-link');
        const hamburgerLines = document.querySelectorAll('.hamburger-line');
        const heroBtn = document.querySelector('.hero-btn');
        contentBody.classList.toggle('light-mode') 
        navBar.classList.toggle('light-mode') 
        sideMenu.classList.toggle('light-mode') 
        sideMenuRight.classList.toggle('menu-section-right-light-mode') 
        menuSocials.classList.toggle('light-mode') 
        heroBtn.classList.toggle('btn-light-mode') 
        sideMenuSection.forEach(item => item.classList.toggle('menu-section-light-mode'))
        navbarLinks.forEach(item => item.classList.toggle('light-mode'))
        hamburgerLines.forEach(item => item.classList.toggle('light-mode-background-dark'))
    }

    return (
        <>
        <div className = 'side-menu-wrapper' style = {wrapperStyle}>

            <div className = 'side-menu-large-section' style = {largeSectionStyle}>

                <div className = 'side-menu-section' style = {sideMenuSectionStyle} onClick = {() => handleLinkClick('#about')}>
                        About
                    </div>
        
                    <div className = 'side-menu-section' style = {sideMenuSectionStyle} onClick = {() => handleLinkClick('#projects')}>
                        Projects
                    </div>
        
                    <div className = 'side-menu-section' style = {sideMenuSectionStyle} onClick = {() => handleLinkClick('#contact')}>
                        Contact
                    </div>

            </div>

            

        <div className = 'side-menu-right-wrapper' style = {rightWrapperStyle}>
            <a href = '/' style = {logoStyle}>J</a>
            <a>
            <div id = 'hamburger-icon' onClick = {()=> handleMenuClick()}>
                <span className = 'hamburger-line'></span>
                <span className = 'hamburger-line'></span>
                <span className = 'hamburger-line'></span>
                <span className = 'hamburger-line'></span>
                
            </div>
            </a>

            <div className = 'menu-socials' style = {socialsStyle}>
            <i className=" mt-3 bi bi-github"></i>
            <i className=" mt-3 bi bi-linkedin"></i>
           <a > <div className = 'light-switch mt-3' onClick = {() => handleLightSwitch()}><span className = 'light-slider'></span></div> </a>
            </div>
        </div>

        </div>
        
        </>
    )
    
}


const wrapperStyle = {
    minHeight:'100vh',
    width:'100vw',
    display:'flex',
    position:'fixed',
    zIndex:'999',
    backgroundColor:'#000',
    transform: 'translateX(calc(-100vw + 100px))',
    transition:'transform 0.4s ease'
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
    color:'inherit'
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
    flexDirection:'column',
    alignItems:'center'
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

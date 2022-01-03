import React, {useEffect} from 'react';

const MouseCircle = () => {

    useEffect(() => {
         //Mouse circle logic 
         let mousePosX = 0,
         mousePosY = 0,
         mouseCircle = document.getElementById('mouse-circle');
 
     document.onmousemove = (e) => {
         mousePosX = e.pageX;
         mousePosY = e.pageY;
     }
 
     let delay = 6,
         revisedMousePosX = 0,
         revisedMousePosY = 0;
 
     function delayMouseFollow() {
         requestAnimationFrame(delayMouseFollow);
 
         revisedMousePosX += (mousePosX - revisedMousePosX) / delay;
         revisedMousePosY += (mousePosY - revisedMousePosY) / delay; 
 
         mouseCircle.style.top = revisedMousePosY + 'px';
         mouseCircle.style.left = revisedMousePosX + 'px';
     }
     delayMouseFollow();

     //Transform mouse on link hover and btn hover
        const links = document.querySelectorAll('a');
        links.forEach(link => {
        link.addEventListener('pointerenter', (e) => {
            mouseCircle.style.transform = 'scale(0.3)'
            mouseCircle.style.background = 'lightgreen'
        })
        link.addEventListener('pointerleave', (e) => {
            mouseCircle.style.transform = 'scale(1)'
            mouseCircle.style.background = '#802bb1'

        })
    })
    //     

    },[])

    

    
       
    
    
    

    return (

        
        <>
            <div id="mouse-circle" style = {mouseCircleStyle}></div>

        </>
    )
}

const mouseCircleStyle = {
  
        position: 'absolute',
        width: '35px',
        height: '35px',
        margin: '-20px 0 0 -20px',
        borderRadius: '50%',
        pointerEvents: 'none',
        backgroundColor:'#802bb1',
        transition:'transform 0.3s',
        zIndex:'1000',
    
}



export default MouseCircle
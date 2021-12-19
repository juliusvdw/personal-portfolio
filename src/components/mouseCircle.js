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
    },[])

    const mouseCircle = document.querySelector('#mouse-circle');
    const body = document.querySelector('body');
    if(body.style.cursor == 'pointer') console.log(true)

       
    
    
    

    return (

        
        <>
            <div id="mouse-circle" style = {mouseCircleStyle}></div>

        </>
    )
}

const mouseCircleStyle = {
  
        position: 'absolute',
        width: '40px',
        height: '40px',
        margin: '-20px 0 0 -20px',
        border: '1px solid #0f1c64',
        borderRadius: '50%',
        pointerEvents: 'none',
        backgroundColor:'#fff'
    
}



export default MouseCircle
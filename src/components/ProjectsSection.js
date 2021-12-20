import React from 'react'

const ProjectsSection = () => {
    return (
        <div className = 'projects-section-wrapper' style = {wrapperStyle}>
            <h3>Some of my recent projects</h3>
            <div className = 'row projects-row' style = {projectsContainerStyle}>
                <div className = 'col-lg-6 mt-4' style = {projectContainerStyle}>
                    <img src = 'cryptohawk-project.png' className = 'w-100 h-100' style = {imageStyle}></img>
                </div>
                <div className = 'col-lg-6 mt-4' style = {projectTextContainerStyle}>
                    <div className = 'project-text-container' style = {projectTextStyle}>
                        <h4 style = {headingStyle}>Cryptohawk</h4>
                        <p className = 'project-description' style = {descriptionStyle}> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi voluptatem magnam voluptatibus fugit molestias architecto nulla, debitis optio tempore maiores numquam esse. Cupiditate, corporis maiores magnam quia autem animi accusantium.</p>
                        <div className = 'project-tech d-flex' style = {techStyle}>
                            <span>React</span>
                            <span>Mongo DB</span>
                            <span>Express</span>
                            <span>Coingecko API</span>
                            <span>Google Cloud</span>
                        </div>
                        <div className = 'project-links' style = {linksStyle}>
                        <a href = '#'><i className=" mt-3 bi bi-github" style = {iconStyle}></i></a>
                        <a href = '#'><i className="mt-3 bi bi-box-arrow-up-right" style = {iconStyle}></i></a>

                        </div>
                    </div>
                </div>
                </div>
                {/*Row 2 */}
               
               <div className = 'row' style = {{marginTop:'70px'}}>

               
                <div className = 'col-lg-6 mt-4' style = {projectTextContainerStyle}>
                    <div className = 'project-text-container' style = {projectTextStyle}>
                        <h4 style = {headingStyle}>Audiophile</h4>
                        <p className = 'project-description' style = {descriptionStyle}> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi voluptatem magnam voluptatibus fugit molestias architecto nulla, debitis optio tempore maiores numquam esse. Cupiditate, corporis maiores magnam quia autem animi accusantium.</p>
                        <div className = 'project-tech d-flex' style = {techStyle}>
                            <span>React</span>
                            <span>Mongo DB</span>
                            <span>Express</span>
                            <span>Coingecko API</span>
                            <span>Google Cloud</span>
                        </div>
                        <div className = 'project-links' style = {linksStyle}>
                        <a href = '#'><i className=" mt-3 bi bi-github" style = {iconStyle}></i></a>
                        <a href = '#'><i className="mt-3 bi bi-box-arrow-up-right" style = {iconStyle}></i></a>

                        </div>
                    </div>
                </div>
                <div className = 'col-lg-6 mt-4 ' style = {projectContainerStyle}>
                    <img src = 'audiophile-project.png' className = 'w-100 h-100' style = {imageStyle}></img>
                </div>
                </div>

               <div className = 'row' style = {{marginTop:'70px'}}>

               <div className = 'col-lg-6 mt-4' style = {projectContainerStyle}>
                    <img src = 'devslist-project.png' className = 'w-100 h-100' style = {imageStyle}></img>
                </div>
                <div className = 'col-lg-6 mt-4' style = {projectTextContainerStyle}>
                    <div className = 'project-text-container' style = {projectTextStyle}>
                        <h4 style = {headingStyle}>Devslist</h4>
                        <p className = 'project-description' style = {descriptionStyle}> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi voluptatem magnam voluptatibus fugit molestias architecto nulla, debitis optio tempore maiores numquam esse. Cupiditate, corporis maiores magnam quia autem animi accusantium.</p>
                        <div className = 'project-tech d-flex' style = {techStyle}>
                            <span>React</span>
                            <span>Mongo DB</span>
                            <span>Express</span>
                            <span>Coingecko API</span>
                            <span>Google Cloud</span>
                        </div>
                        <div className = 'project-links' style = {linksStyle}>
                       <a href = '#'> <i className=" mt-3 bi bi-github" style = {iconStyle}></i></a>
                       <a href = '#'> <i className="mt-3 bi bi-box-arrow-up-right" style = {iconStyle}></i></a>

                        </div>
                    </div>
                </div>
                
                </div>

               
                
        </div>
    )
}

const wrapperStyle = {
    minHeight:'100vh'
}

const projectsContainerStyle = {
    paddingTop:'50px'}

const projectContainerStyle = {
    height:'350px',
    borderRadius:'7px',
    marginTop:'40px !important'
}

const imageStyle = {
    borderRadius:'7px',
}

const projectTextContainerStyle = {
    display:'flex',
    alignItems:'center'
}

const projectTextStyle = {
    padding: '0px 20px'
}

const headingStyle = {
    letterSpacing:'1px'
}

const descriptionStyle = {
    marginTop:'30px',
    color:'rgb(155,155,155)'
       
}

const techStyle = {
    justifyContent:'space-between',
    minWidth:'50%',
    color:'rgb(155,155,155)',
    fontSize:'14px',
    marginTop:'20px',
    marginBottom:'15px'
}

const linksStyle = {
    display:'flex',
    width:'100%',
    justifyContent :'end'

}

const iconStyle = {
    fontSize:'24px',
    marginLeft:'20px',
}


export default ProjectsSection

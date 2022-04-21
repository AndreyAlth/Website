import React from 'react';

function ProjectViewer() {
    const riskScan = 'https://gabrielbarcelo-website.s3.amazonaws.com/Portafolio/images/appriskscan.png';
    const restServer = 'https://gabrielbarcelo-website.s3.amazonaws.com/Portafolio/images/mock-server.webp';
    const mockup = 'https://gabrielbarcelo-website.s3.amazonaws.com/Portafolio/images/mockup.png';


    return(
        <div className='project-viewer'>
            <div className='card-container'>
            <h2 className='project-viewer-title'>My recent projects</h2>
            <div className="cards">
                <a href="https://github.com/AndreyAlth/RestServer">
                    <div className="card-right">
                        <div className="project-image height">
                            <img src={restServer} alt="Risk Scan"/>
                        </div>
                        <div className="description-project">
                            <p className='project-description'>API Rest Server</p>
                        </div>
                    </div>
                </a>
                
                <a href="https://www.appriskscan.com/">
                    <div className="card-center">
                        <div className="project-image">
                            <img src={riskScan} alt="Risk Scan"/>
                        </div>
                        <div className="description-project">
                            <p className='project-description'>App Risk Scan</p>
                        </div>
                    </div>
                </a>
                
                <a href="https://www.spilup.shop/">
                    <div className="card-left">
                            <div className="project-image">
                                <img src={mockup} alt="Risk Scan"/>
                            </div>
                        <div className="description-project">
                            <p className='project-description'>Ecommerce Template  <br />(No responsive yet) </p>
                        </div>
                    </div>
                </a>
            </div>
            </div>
        </div>
    )
}

export default ProjectViewer;
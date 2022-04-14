import React from 'react';

function Header() {
    const logo = "https://gabrielbarcelo-website.s3.amazonaws.com/Portafolio/images/logo2-white.png";
    const cv = 'https://gabrielbarcelo-website.s3.amazonaws.com/Portafolio/static/cv-v3.pdf';
    
    return (
        <header className="header">
            <div className="wrapper">
                <div className="header-content">
                    <a href="/" className='responsive-a'>
                        <img src={logo} alt="logo"/>
                    </a>
                    
                    <nav className="menu">
                        <ul>
                            <li>
                                <a className="" href="/certificados">Certificates</a>
                            </li>
                            <li>
                                <a href="#project">Projects</a>
                            </li>
                            <li>
                                <a href="/">
                                    <img src={logo} alt="logo" width="20" height="20"/>
                                </a>
                            </li>
                            <li>
                                <a href="#contact">Contact</a>
                            </li>
                            <li>
                                <a href="#contact">About me</a>
                            </li>
                        </ul>
                    </nav>
                    <a className="button-gradient responsive-button" href={cv} download="">Download CV</a>
                </div>
            </div>
        </header>
    )
}

export default Header

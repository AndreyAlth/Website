import React from 'react';

function Header() {
    const logo = "https://gabrielbarcelo-website.s3.amazonaws.com/Portafolio/images/logo.png";
    const cv = "https://gabrielbarcelo-website.s3.amazonaws.com/Portafolio/static/cv-v3.pdf";
    return (
        <header className="header">
            <div className="wrapper">
                <div className="header-content">
                    <a href="/">
                        <img src={logo} alt="logo" width="70" height="20"/>
                    </a>
                    <nav className="menu">
                        <ul>
                            <li>
                                <a className="is-active" href="/certificados">Certificados</a>
                            </li>
                            <li>
                                <a href="#project">Proyectos</a>
                            </li>
                            <li>
                                <a href="#contact">Hablemos</a>
                            </li>
                        </ul>
                    </nav>
                    <a className="button" href={cv} download="">Curriculum</a>
                </div>
            </div>
        </header>
    )
}

export default Header

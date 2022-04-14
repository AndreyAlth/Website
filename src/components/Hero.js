import React from 'react';

function Hero() {
    const perfil = "https://gabrielbarcelo-website.s3.amazonaws.com/Portafolio/images/perfilcv.png";
    const phone = "https://gabrielbarcelo-website.s3.amazonaws.com/Portafolio/icons/icon-phone.svg";
    const mail = "https://gabrielbarcelo-website.s3.amazonaws.com/Portafolio/icons/icon-important_mail.svg";
    const cv = "https://gabrielbarcelo-website.s3.amazonaws.com/Portafolio/static/cv-v3.pdf";
    const illustration1 = 'https://gabrielbarcelo-website.s3.amazonaws.com/Portafolio/images/iIllustration-top.svg';
    const illustration2 = 'https://gabrielbarcelo-website.s3.amazonaws.com/Portafolio/images/illustration-bottom-hero.svg';
    return (
        <section className="hero py-5" id="main">
            <div className="illustrations-container">
                <div className="illustration slide-tl">
                    <img src={illustration1} alt="" />
                </div>
                <div className="illustration-bottom-hero slide-tr">
                    <img src={illustration2} alt=""/>
                </div>
            </div>
            <div className="hero-image">
                <img src={perfil} width="328" height="330" alt=""/>
            </div>
            <div className="hero-description">
                <h1>
                    <span>Hello World </span>
                    <span>I'm Gabriel</span>
                </h1>
                <p>
                I want to make the world a better place using tech.
                Development specialized on JavaScript, React and NodeJS.
                Teamwork using Git/GitHub/GitLab.
                </p>
                {/* <div className="social">
                    <a className="button-icon" href="tel:9994506916">
                        <img src={phone}/>
                    </a>
                    <a className="button-icon" href="tel:9994506916">
                        <img src={mail}/>
                    </a>
                </div> */}
                <a href={cv} download="" className="button-gradient">Download CV</a>
            </div>
        </section>
    )
}

export default Hero

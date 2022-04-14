import React from 'react';

function Footer() {
    const logo = "https://gabrielbarcelo-website.s3.amazonaws.com/Portafolio/images/logo.png";
    const phone = "https://gabrielbarcelo-website.s3.amazonaws.com/Portafolio/icons/icon-phone.svg";
    const mail = "https://gabrielbarcelo-website.s3.amazonaws.com/Portafolio/icons/icon-important_mail.svg";
    const github = "https://gabrielbarcelo-website.s3.amazonaws.com/Portafolio/icons/icon-github.svg";
    const illustration1 = 'https://gabrielbarcelo-website.s3.amazonaws.com/Portafolio/images/Illustration-planet-footer.svg';
    const illustration2 = 'https://gabrielbarcelo-website.s3.amazonaws.com/Portafolio/images/Illustration-planet2-footer.svg';
    return (
        <footer className="footer" id="contact">
            <div class="social footer-social">
                <a  href="tel:999638676">
                    <img src={phone}/>
                </a>
                <a href="mailto: gabrielbarcelo9727@gmail.com">
                    <img src={mail}/>
                </a>
                <a href="https://github.com/AndreyAlth">
                    <img src={github}/>
                </a>
            </div>
            
            <div class="footer-copyright">
                <p>
                    Hecho con el ❤ por Jaume
                </p>
                <p>Copyright 2021 - Todos los derechos reservados.</p>
            </div>
            <hr />
        </footer>
    )
}

export default Footer

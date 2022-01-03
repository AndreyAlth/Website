import React from 'react';

function Footer() {
    const logo = "https://gabrielbarcelo-website.s3.amazonaws.com/Portafolio/images/logo.png";
    const phone = "https://gabrielbarcelo-website.s3.amazonaws.com/Portafolio/icons/icon-phone.svg";
    const mail = "https://gabrielbarcelo-website.s3.amazonaws.com/Portafolio/icons/icon-important_mail.svg";
    return (
        <footer className="footer" id="contact">
            <div class="footer-logo">
                <img src={logo} alt="logo" width="70" height="20"/>
            </div>
            <div class="social">
                <a class="button-icon" href="tel:9994506916">
                    <img src={phone}/>
                </a>
                <a class="button-icon" href="tel:9994506916">
                    <img src={mail}/>
                </a>
            </div>
            <div class="footer-copyright">
                <p>
                    Hecho con el ❤ por Jaume
                </p>
                <p>Copyright 2021 - Todos los derechos reservados.</p>
            </div>
        </footer>
    )
}

export default Footer

import React from 'react';

function FooterSocial() {
    const logo = "https://gabrielbarcelo-website.s3.amazonaws.com/Portafolio/images/logo.png";
    const phone = "https://gabrielbarcelo-website.s3.amazonaws.com/Portafolio/icons/icon-phone.svg";
    const mail = "https://gabrielbarcelo-website.s3.amazonaws.com/Portafolio/icons/icon-important_mail.svg";
    const github = "https://gabrielbarcelo-website.s3.amazonaws.com/Portafolio/icons/icon-github.svg";
    const illustration1 = 'https://gabrielbarcelo-website.s3.amazonaws.com/Portafolio/images/Illustration-planet-footer.svg';
    const illustration2 = 'https://gabrielbarcelo-website.s3.amazonaws.com/Portafolio/images/Illustration-planet2-footer.svg';
    return (
        <footer className="footer footer-planets" id="contact">
            <div className="illustrations-container-footer">
                <div className="illustration-planet-footer slide-tl">
                    <img src={illustration1} alt="" />
                </div>
                <div className="illustration-planet-right slide-tr">
                    <img src={illustration2} alt=""/>
                </div>
            </div>
        </footer>
    )
}

export default FooterSocial;
import React from 'react'

function Hero() {
    const perfil = "https://gabrielbarcelo-website.s3.amazonaws.com/Portafolio/images/perfilcv.png";
    const phone = "https://gabrielbarcelo-website.s3.amazonaws.com/Portafolio/icons/icon-phone.svg";
    const mail = "https://gabrielbarcelo-website.s3.amazonaws.com/Portafolio/icons/icon-important_mail.svg";
    return (
        <section className="hero" id="main">
            <div className="hero-image">
                <img src={perfil} width="328" height="330" alt=""/>
            </div>
            <div className="hero-description">
                <h1>
                    <span>Hola a todos</span>
                    <span>Soy Gabriel</span>
                </h1>
                <p>
                    Desarrollador Full Stack Web con el objetivo de aportar
                    soluciones a problematicas en diferentes áreas
                    utilizando las habilidades adquiridas para continuar
                    mi crecimiento profesional.
                </p>
                <div className="social">
                    <a className="button-icon" href="tel:9994506916">
                        <img src={phone}/>
                    </a>
                    <a className="button-icon" href="tel:9994506916">
                        <img src={mail}/>
                    </a>
                </div>
                <a href="/certificados" className="button">Ver certificados</a>
            </div>
        </section>
    )
}

export default Hero

import React from 'react';

function Form() {
    return (
        <form action="https://formspree.io/f/xrgrjyjp" method="POST" className="form" id="form">
            <h2 class="title">Hablemos</h2>
            <p>
                Si está interesado en trabajar conmigo en su próximo proyecto, no dude en ponerse en contacto conmigo.
            </p>
            <label for="form-name">
                Nombre Completo
                <input required name="name" id="form-name" type="text" placeholder="Nombre"/>
            </label>
            <label for="form-mail">
                Correo Electrónico
                <input required name="email" id="form-mail" type="email" placeholder="nombre@gmail.com"/>
            </label>
            <label for="form-message">
                Mensaje
                <textarea required name="message" placeholder="Mensaje" id="form-message" cols="30" rows="7"></textarea>
            </label>
            <button class="button" type="submit">Enviar mensaje</button>
        </form>
    )
}

export default Form;

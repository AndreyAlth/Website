import React from 'react';

function Form() {
    return (
        <form action="https://formspree.io/f/xrgrjyjp" method="POST" className="form" id="form">
            <p>
                Send me a message
            </p>
            <label for="form-name">
                Name
                <input required name="name" id="form-name" type="text" />
            </label>
            <label for="form-mail"> 
                Email Adress
                <input required name="email" id="form-mail" type="email" />
            </label>
            <label for="form-message">
                Message
                <textarea required name="message" id="form-message" cols="30" rows="7"></textarea>
            </label>
            <button class="button-gradient-message" type="submit">Enviar mensaje</button>
        </form>
    )
}

export default Form;

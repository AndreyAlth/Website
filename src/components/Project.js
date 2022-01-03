import React from 'react';

function Project(props) {
    return (
        <section className="project" id="project">
            <div className="project-image">
                <img src={props.image} alt=""/>
            </div>
            <div className="project-description">
                <a className="title" target="_blank" href="https://www.appriskscan.com/">{props.website}</a>
                <p>
                    {props.description}
                </p>
                <a target="_blank" href="#" className="button is-secondary">Ver Codigo</a>
                <a target="_blank" href="#" className="button">Ver Proyecto</a>
            </div>
            
        </section>
    )
}

export default Project;

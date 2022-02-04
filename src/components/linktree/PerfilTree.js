import React from 'react';
import LinkItem from './LinkItem';
import {certificados} from '../data/certificados';

function PerfilTree() {
    function orderCertificate(a, b) {
        if (a.title > b.title) return 1;
        if (a.title < b.title) return -1;
        return 0;
      }
    const orderedCertificados = certificados.sort(orderCertificate);

    const perfil = "https://gabrielbarcelo-website.s3.amazonaws.com/Portafolio/images/perfilcv.png";
    return (
        <>
        <div className="container perfil-tree-container">
            <img src={perfil} 
            alt="imagen de perfil" 
            className='image-tree'/>
            <h1 className='perfil-tree-title mt-2'>Gabriel Barceló</h1>
            <div className='perfil-tree-desc'>Desarrollador Web</div>
            <div className="linktree my-3">
                {
                    orderedCertificados.map( certificado => (
                    <LinkItem {...certificado}/>
                    ))
                }
            </div>
        </div>
        </>
    );
}

export default PerfilTree;

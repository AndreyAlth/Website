import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from '../Footer';
import Form from '../Form';
import Header from '../Header';
import Hero from '../Hero';
import PerfilTree from '../linktree/PerfilTree';
import Project from '../Project';

function DashoardRoute() {
  function PrincipalSection(){
    return(
      <>
      <Hero/>
      <section class="comment">
          <p>Proyectos Desarrollados</p>
          <p>Aquí hay algunos que me gustaría compartir</p>
          <img src="https://gabrielbarcelo-website.s3.amazonaws.com/Portafolio/icons/arrow-down.svg" alt="arrow down"/>
      </section>
      <Project
      website="appriskscan.com"
      description="Aplicación Web que usan las empresas para realizar su diagnóstico organizacional."
      image="https://gabrielbarcelo-website.s3.amazonaws.com/Portafolio/images/appriskscan.png"
      />
      <Form/>
      </>
    )
  }

  return (
      <>
      <Header/>
      <div className="wrapper">
        <Routes>
          <Route path='/' element={PrincipalSection()}/>
          <Route path='/certificados' element={<PerfilTree/>}/>
        </Routes>
        <Footer/>
      </div>
      </>
  );
}

export default DashoardRoute;

import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Project from './components/Project'
import Form from './components/Form';
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="wrapper">
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
        <Footer/>

      </div>
    </div>
  );
}

export default App;

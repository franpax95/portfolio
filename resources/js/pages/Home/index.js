import React from 'react';
import './Home.css';

const Home = () => (
    <div className="Home">
        <h1 className="title">
            ¡Bienvenido al portfolio de 
            <br />
            <i>Francisco Javier Navarro García</i>!
        </h1>
        <h3 className="subtitle">Desarrollador web junior</h3>


        <div className="description">
            Tengo 24 años y soy estudiante de ingeniería Telemática en la UMA, aunque mi 
            verdadera pasión es el <b>desarrollo web</b>. 
            <br/><br/>
            Desde que lo descubrí en la carrera me he enamorado de estas tecnologías. He 
            descubierto mi <b>vocación</b> y estoy totalmente decidido 
            a trabajar en lo que me gusta.
        </div>
        <div className="image">
            <img src="/img/about1.jpg" alt="About @franpax95" />
        </div>


        <div className="image">
            <img src="/img/about2.jpg" alt="About @franpax95" />
        </div>
        <div className="description">
            En lo que respecta al desarrollo web y la programación, tengo los conocimientos
            más básicos adquiridos en la carrera, es decir, HTML, CSS, JavaScript y PHP.
            También empecé en el <i>framework</i> <b>CodeIgniter</b>, para posteriormente
            aprender otros como <b>React.js</b> y <b>Laravel</b> de manera autodidacta.
        </div>


        <div className="description">
            De hecho, mis tecnologías favoritas son Laravel y React.js.
            <br /><br />
            En cuanto a <b>React.js</b>, he programado con componentes de clase y con
            componentes funcionales, usando <i>Hooks</i>.
            Por supuesto, manejo la funcionalidad básica (<i>React-Router, Referencias, Fragmentos...</i>).
            Además, he hecho códigos tanto con <i>Redux</i>, como con <i>React.Context</i>.
            <br /><br />
            Mi experiencia con <b>Laravel</b> es más limitada en cuanto a recursos y tiempo, normalmente
            enfocado en la creación de APIs para el proyecto en concreto, pero
            es mi intención e ilusión conseguir ser capaz de manejar la tecnología junto a la anterior
            para ser un desarrollador Full-Stack capaz de gestionar sus propias páginas web, si me lo
            propusiese.
        </div>
        <div className="image">
            <img src="/img/about7.png" alt="About @franpax95" />
        </div>


        <div className="image">
            <img src="/img/about8.jpg" alt="About @franpax95" />
        </div>
        <div className="description">
            De mi experiencia con el desarrollo web, podemos hablar de
            <ul>
                <li>alrededor de 4 años de experiencia en <b>HTML</b>, <b>CSS</b>, <b>JavaScript</b> y <b>PHP</b>.</li>
                <li>alrededor de 3 años de experiencia en el uso de <b>CodeIgniter</b>.</li>
                <li>alrededor de 1 año de experiencia en el uso de <b>React.js</b>.</li>
                <li>alrededor de 1 año de experiencia en el uso de <b>Laravel</b>.</li>
                <li>uso de <b>JQuery</b> y <b>AJAX</b>.</li>
                <li>uso de <b>MySQL</b>.</li>
                <li>uso de <b>Redux</b>.</li>
                <li>uso de <b>GraphQL</b>.</li>
            </ul>
            <br />
            Además, en la carrera he tocado muchos otros lenguajes de programación
            <ul>
                <li>alrededor de 5 años desde que aprendí <b>C</b> y <b>C++</b>.</li>
                <li>alrededor de 3 años programando en <b>JAVA</b>.</li>
                <li><b>Arduino</b> para programar <b>IoT</b>.</li>
                <li><b>AndroidStudio</b> (Java).</li>
                <li><b>Python</b>.</li>
            </ul>
        </div>
    </div>
);

export default Home;
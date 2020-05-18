import React from 'react';
import './styles/Index.css';

const Index = () => (
    <div className="Index">
        <h1 className="title">
            ¡Bienvenido al portfolio de <i>Francisco Javier Navarro García</i>!
        </h1>
        <h3 className="subtitle">Desarrollador junior Full-Stack</h3>


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
            En lo que respecta al desarrollo web y la programación, tengo conocimientos desde 
            lo más básico como podrían ser HTML, CSS, JavaScript o PHP, hasta conocimientos 
            en el manejo de <i>frameworks</i>, en concreto <b>React.js</b>,
            <b> CodeIgniter</b> y <b>Laravel</b>.
        </div>


        <div className="description">
            Las tecnologías que más me gustan con diferencia son la combinación de 
            <b> Laravel con React.js</b>.
            <br /><br />
            De React.js he programado con componentes de clase y componentes funcionales
            con <i>hooks</i>. También estoy familiarizado con el manejo de <i>React-Router</i> y
            el manejo de <i>Redux</i>.
            <br /><br />
            Con Laravel tengo mucho menos recorrido, pero es mi intención e ilusión conseguir
            hacerme un experto y ser un desarrollador Full-Stack <b>completo </b> 
            y <b>fiable</b>.
        </div>
        <div className="image">
            <img src="/img/about4.png" alt="About @franpax95" />
        </div>


        <div className="image">
            <img src="/img/about3.jpg" alt="About @franpax95" />
        </div>
        <div className="description">
            En cuanto a mi experiencia con los diferentes lenguajes, se podría decir que tengo
            <ul>
                <li>
                    alrededor de 4 años de experiencia en <b>HTML</b>, <b>CSS</b>, <b>JavaScript</b> y <b>PHP</b>.
                </li>
                <li>
                    alrededor de 4 años de experiencia en el uso de <b>CodeIgniter</b>.
                </li>
                <li>
                    alrededor de 2 años de experiencia en el uso de <b>React.js</b>.
                </li>
                <li>
                    alrededor de 1 año de experiencia en el uso de <b>Laravel</b>.
                </li>
                <li>
                    uso de <b>JQuery</b> y <b>AJAX</b>.
                </li>
            </ul>
            <br />
            Además, tengo experiencia en otros lenguajes de programación y en la <b>Programación Orientada a Objetos (<i>POO</i>)</b>
            <ul>
                <li>
                    alrededor de 6 años de experiencia programando, sobretodo, en <b>C</b>, pero también en <b>C++</b>.
                </li>
                <li>
                    alrededor de 4 años de experiencia programando en <b>JAVA</b>.
                </li>
                <li>
                    manejo básico de <b>Arduino</b> para programar <b>IoT</b>.
                </li>
                <li>
                    manejo básico de <b>AndroidStudio</b> (Java).
                </li>
            </ul>
        </div>
    </div>
);

export default Index;
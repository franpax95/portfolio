import React, { useState } from 'react';

import { connect } from 'react-redux';
import * as projectsActions from '../../actions/projectsActions';

import './styles/index.css';

const Projects = (props) => {
    const [modalOn, setModalOn] = useState(false);
    const [currentImg, setCurrentImg] = useState(0);
    const [currentProject, setCurrentProject] = useState('');

    const renderModal = () => {
        return(
            <div className="modal" onClick={handleClickLeaveModal}>
                <button className="modal-btn" onClick={handleClickPrevImg}>
                    <i className="fa fa-angle-left"></i>
                </button>
                <div className="modal-elem" onClick={handleClickNextImg}>
                    <img src={`/img/${currentProject}/img${currentImg}.jpg`} alt={currentProject} />
                </div>
                <button className="modal-btn" onClick={handleClickNextImg}>
                    <i className="fa fa-angle-right"></i>
                </button>
            </div>
        )
    }

    const handleClickPrevImg = (e) => {
        e.stopPropagation();

        if(currentImg == 0){
            switch(currentProject){
                case 'entrenamiento':
                    setCurrentImg(6);
                    break;

                case 'joewilliams':
                    setCurrentImg(7);
                    break;

                case 'aelaslagunas':
                    break;

                default:
                    return '';
            }
        }
        else{ setCurrentImg(currentImg - 1); }
    }

    const handleClickNextImg = (e) => {
        e.stopPropagation();
        
        if(
            ((currentProject == 'entrenamiento') && (currentImg == 6))
            || ((currentProject == 'joewilliams') && (currentImg == 7))
            || ((currentProject == 'aelaslagunas') && (currentImg == 5))
        ){ setCurrentImg(0); }

        else{ setCurrentImg(currentImg + 1); }
    }

    const handleClickLeaveModal = () => {
        setModalOn(false);
        setCurrentProject('');
        setCurrentImg(0);
    }

    const handleOnMouseEnter = (e) => {
        e.currentTarget.children[1].classList.remove("top-300");
        e.currentTarget.children[1].classList.add("top-0");
    }

    const handleOnMouseLeave = (e) => {
        e.currentTarget.children[1].classList.remove("top-0");
        e.currentTarget.children[1].classList.add("top-300");
    }

    const handlePrevViewClick = (project) => {
        setModalOn(true);
        setCurrentProject(project);
    }
    
    return (
        <div className="Projects">
            <h1 className="title">
                Mis proyectos
                <a href="https://github.com/franpax95" target="_blank">
                    <i className="fa fa-github"></i>
                </a>
            </h1>
            
            <div className="list">
                <div className="elem" onMouseEnter={handleOnMouseEnter} onMouseLeave={handleOnMouseLeave}>
                    <div className="name">
                        Entrenamiento
                    </div>
                    <div className="container top-300">
                        <div className="links">
                            <button onClick={() => handlePrevViewClick('entrenamiento')}>
                                <i className="fa fa-picture-o"></i>
                            </button>

                            <a href="https://entrenamiento-app.herokuapp.com/" target="_blank">
                                <i className="fa fa-external-link"></i>
                            </a>

                            <a href="https://github.com/franpax95/Entrenamiento" target="_blank">
                                <i className="fa fa-github"></i>
                            </a>
                        </div>
                        <div className="description">
                            Página desarrollada con React, Redux y Laravel.
                            Puedes realizar cualquiera de las rutinas disponibles.
                            Posee un timer y un contador para facilitar el 
                            desarrollo de los ejercicios y una vista previa de
                            éstos.
                        </div>
                    </div>
                </div>

                <div className="elem" onMouseEnter={handleOnMouseEnter} onMouseLeave={handleOnMouseLeave}>
                    <div className="name">
                        Joe Williams
                    </div>
                    <div className="container top-300">
                        <div className="links">
                            <button onClick={() => handlePrevViewClick('joewilliams')}>
                                <i className="fa fa-picture-o"></i>
                            </button>

                            <a href="https://joewilliams.herokuapp.com/" target="_blank">
                                <i className="fa fa-external-link"></i>
                            </a>

                            <a href="https://github.com/franpax95/JoeWilliamsWeb" target="_blank">
                                <i className="fa fa-github"></i>
                            </a>
                        </div>
                        <div className="description">
                            Portfolio personal de Joe Williams, diseñador gráfico.
                            Hecha en colaboración con @DMM161. Está hecha con React,
                            Redux y Laravel.
                        </div>
                    </div>
                </div>

                <div className="elem" onMouseEnter={handleOnMouseEnter} onMouseLeave={handleOnMouseLeave}>
                    <div className="name">
                        AE Las Lagunas
                    </div>
                    <div className="container top-300">
                        <div className="links">
                            <button onClick={() => handlePrevViewClick('aelaslagunas')}>
                                <i className="fa fa-picture-o"></i>
                            </button>

                            <a href="https://github.com/franpax95/AELasLagunas-ReactJS" target="_blank">
                                <i className="fa fa-external-link"></i>
                            </a>

                            <a href="https://github.com/franpax95/AELasLagunas-ReactJS" target="_blank">
                                <i className="fa fa-github"></i>
                            </a>
                        </div>
                        <div className="description">
                            Prototipo de la que pudo ser la página oficial de
                            la antigua Autoescuela Las Lagunas, ahora Autoescuela
                            Servial. Está hecha con React.js y utiliza una EmailJS
                            como API para el Contacto.
                        </div>
                    </div>
                </div>
            </div>
            {(modalOn) ? renderModal() : ''}
        </div>
    )
};

const mapStateToProps = ({projectsReducer}) => projectsReducer;
export default connect(mapStateToProps, projectsActions)(Projects);
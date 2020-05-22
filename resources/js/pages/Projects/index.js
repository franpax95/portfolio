import React, { useContext } from 'react';
import { Context } from '../../components/Context';
import data from '../../Projects.json';
import { Modal } from '../../components/Modal';
import { Project } from '../../components/Project';
import './Projects.css';

const Projects = () => {
    const projects = data.projects;
    const { modalOn } = useContext(Context);

    const renderProjects = () => {
        return projects.map(project => (
            <Project 
                key={project.id}
                id={project.id}
                name={project.name}
                description={project.description}
                external_link={project.external_link}
                github_link={project.github_link}
            />
        ));
    }
    
    
    return (
        <div className="Projects">
            <h1 className="title">Mis proyectos</h1>
            
            <div className="list">
                {renderProjects()}
            </div>

            <div className="notification">
                <div>¡Echa un vistazo a mi GitHub <span className="aditional-text">para ver todavía más sobre mi</span>!</div>
                <a target="_blank" href="https://github.com/franpax95"><i className="fa fa-github"></i>Visitar Github<i className="fa fa-github"></i></a>
            </div>
            {(modalOn) ? <Modal /> : ''}
        </div>
    )
};

export default Projects;
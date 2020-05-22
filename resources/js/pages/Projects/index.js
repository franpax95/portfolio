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
            <h1 className="title">
                Mis proyectos
                <a href="https://github.com/franpax95" target="_blank">
                    <i className="fa fa-github"></i>
                </a>
            </h1>
            
            <div className="list">
                {renderProjects()}
            </div>
            {(modalOn) ? <Modal /> : ''}
        </div>
    )
};

export default Projects;
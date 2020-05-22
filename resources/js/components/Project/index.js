import React, { useContext } from 'react';
import { Context } from '../../components/Context';
import './Project.css';

export const Project = ({ 
    id=0,
    name='', 
    description='', 
    external_link='', 
    github_link='' 
}) => {
    const { setCurrentIdProject, activateModal } = useContext(Context);

    const handleOnMouseEnter = (e) => {
        e.currentTarget.children[1].classList.remove("top-300");
        e.currentTarget.children[1].classList.add("top-0");
    }

    const handleOnMouseLeave = (e) => {
        e.currentTarget.children[1].classList.remove("top-0");
        e.currentTarget.children[1].classList.add("top-300");
    }

    const handlePrevViewClick = (idProject) => {
        setCurrentIdProject(idProject);
        activateModal();
    }

    return(
        <div className="Project" onMouseEnter={handleOnMouseEnter} onMouseLeave={handleOnMouseLeave}>
            <div className="name">{name}</div>

            <div className="container top-300">
                <div className="links">
                    <button onClick={() => handlePrevViewClick(id)}>
                        <i className="fa fa-picture-o"></i>
                    </button>
                    <a href={external_link} target="_blank">
                        <i className="fa fa-external-link"></i>
                    </a>
                    <a href={github_link} target="_blank">
                        <i className="fa fa-github"></i>
                    </a>
                </div>

                <div className="description">{description}</div>
            </div>
        </div>
    );
}
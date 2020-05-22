import React, { useState, useContext } from 'react';
import { Context } from '../Context';
import data from '../../Projects.json';
import './Modal.css';

export const Modal = () => {
    const { currentIdProject, removeModal } = useContext(Context);
    const project = data.projects[currentIdProject];

    const [currentOpacity, setCurrentOpacity] = useState(1);
    const [currentImg, setCurrentImg] = useState(0);

    const opacityTransitionEffect = () => {
        setCurrentOpacity(0);
        setTimeout(() => setCurrentOpacity(1), 600);
    }

    const handleClickPrevImg = (e) => {
        e.stopPropagation();
        opacityTransitionEffect();

        if(currentImg == 0){ 
            setTimeout(() => setCurrentImg(project.nimg - 1), 300); 
        }else{
            setTimeout(() => setCurrentImg(currentImg - 1), 300); 
        }
    }

    const handleClickNextImg = (e) => {
        e.stopPropagation();
        opacityTransitionEffect();

        if(currentImg < project.nimg-1){
            setTimeout(() => setCurrentImg(currentImg + 1), 300); 
        }else{
            setTimeout(() => setCurrentImg(0), 300); 
        }
    }

    const handleClickLeaveModal = (e) => {
        removeModal();
    }

    return(
        <div className="Modal" onClick={handleClickLeaveModal}>
            <button className="modal-btn" onClick={handleClickPrevImg}>
                <i className="fa fa-angle-left"></i>
            </button>
            <div className="modal-elem" onClick={handleClickNextImg}>
                <img 
                    src={project.images[currentImg]} 
                    alt={project.name} 
                    style={{ opacity: currentOpacity }}
                />
            </div>
            <button className="modal-btn" onClick={handleClickNextImg}>
                <i className="fa fa-angle-right"></i>
            </button>
        </div>
    );
}
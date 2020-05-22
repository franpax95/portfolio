import React, { createContext, useState } from 'react';

export const Context = createContext();

const Provider = ({ children }) => {
    const [modalOn, setModalOn] = useState(false);
    const [currentIdProject, setCurrentIdProject] = useState(0);

    const value = {
        currentIdProject,
        setCurrentIdProject,
        modalOn,
        activateModal: () => setModalOn(true),
        removeModal: () => setModalOn(false)
    }

    return(
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    );
}

export default {
    Provider,
    Consumer: Context.Consumer
}
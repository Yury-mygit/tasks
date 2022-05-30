import React from 'react';
import cl from './MuButton.module.scss'

const MyButton = ({children, ...props}) => {
    return (
        <button {...props} className={cl.myBtn}>
            {children}
        </button>
    );
};

export default MyButton;
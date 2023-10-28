import React from 'react';
import classes from './MyButton.module.css'
const MyButton = ({props, children}) => {
    return (
        <button {...props} className={classes.btn}>
            {children}
        </button>
    );
};

export default MyButton;
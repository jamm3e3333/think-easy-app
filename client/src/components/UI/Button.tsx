import React from 'react';
import classes from './Button.module.css';

interface ButtonProps {
    className?: string;
    title: string;
    type: 'button' | 'submit';
    disabled?: boolean;
    onClick?: () => void;
}

const Button: React.FC<ButtonProps> = (props) => {
    return <button
        className={`${classes['button-ui']} ${props.className}`}
        type={props.type}
        onClick={props.onClick}
        disabled={props.disabled}
    >{props.title}</button>
}

export default Button;
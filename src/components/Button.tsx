import React from 'react';
import Icon from './Icon';

interface ButtonProps {
    href?: string;
    text: string;
    iconComponent?: React.ReactNode;
    icon?: string;
    iconSize?: number;
    iconColor?: string;
    className?: string;
}

// control text properties & background properties via parent class, not defined here to keep defaults
const Button: React.FC<ButtonProps> = ({ className, text, icon, iconSize, iconColor, href, iconComponent }) => {
    const handleClick = () => {
        if (href) {
            window.open(href, '_blank')
        }
    };

    return (
        <button className={`py-4 px-4 my-2 rounded-md flex items-center gap-2 ${className} `} onClick={handleClick}>
            {iconComponent}
            {icon && <Icon className='mx-2' iconName={icon} width={iconSize} height={iconSize} color={iconColor} />}
            <span>{text}</span>
        </button>
    );
};

export default Button;

import React from 'react';
import Icon from './Icon';
import { OutboundLink } from "gatsby-plugin-google-gtag"

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
   

    return (
        <OutboundLink href={href} target="_blank" className={`py-4 px-4 my-2 rounded-md flex items-center gap-2 ${className} `}>
            {iconComponent}
            {icon && <Icon className='mx-2' iconName={icon} width={iconSize} height={iconSize} color={iconColor} />}
            <span>{text}</span>
        </OutboundLink>
    );
};

export default Button;

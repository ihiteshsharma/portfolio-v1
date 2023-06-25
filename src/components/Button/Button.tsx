import React, { FC } from 'react';
import Icon from '../Icon';

type IconProps = {
  size: number,
  color: string
}

type ButtonProps = {
  type: 'primary' | 'secondary';
  label: string;
  labelColor?: string,
  labelOnHover?: boolean,
  icon?: string;
  iconPosition?: 'left' | 'right';
  iconProps?: IconProps
};

const Button: FC<ButtonProps> = ({ type, label, labelColor = '#000', icon, iconPosition = 'left', iconProps }) => {
  return (
    <button className={`button ${type}`}>
      {icon && iconPosition === 'left' && <span className="icon-left"><Icon size={iconProps?.size || 24} color={labelColor}/></span>}
      <span className="label">{label}</span>
      {icon && iconPosition === 'right' && <span className="icon-right">{icon}</span>}
    </button>
  );
};

export default Button;

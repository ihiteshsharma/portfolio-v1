import React, { FC } from 'react';
import Icon from './Icon';

type ButtonProps = {
  type: 'primary' | 'secondary';
  label: string;
  icon?: string;
  iconPosition?: 'left' | 'right';
  iconProps?: object
};

const Button: FC<ButtonProps> = ({ type, label, icon, iconPosition = 'left' }) => {
  return (
    <button className={`button ${type}`}>
      {icon && iconPosition === 'left' && <span className="icon-left">{icon}</span>}
      <span className="label">{label}</span>
      {icon && iconPosition === 'right' && <span className="icon-right">{icon}</span>}
    </button>
  );
};

export default Button;

import React, { FC } from 'react'

const ButtonDefaultProps = {
    type: 'primary', // one of primary, secondary, success, warning, error, muted, dark
    disabled: false,
    rounded: false,
    link: false,
    iconLeft: null,
    iconRight: null,
}

const Button: FC<any> = ({width=24, height=24, color="#000", iconName="circle", className='', tag:Tag='button'}) => {
    return(
        <button></button>

    )
}

export default Button;
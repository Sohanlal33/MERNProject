import React from 'react'
import logoPlaceholder from '../resources/images/logoPlaceholder.svg';

export const Logo = ({ text }) => {
    return (
        <div className='auth-form-logo-container'>
            <Logo text={"Log in to clone"} />
            <img src={logoPlaceholder} alt="" />
            <span>&nbsp;&nbsp; {text} </span>
        </div>
    );
};
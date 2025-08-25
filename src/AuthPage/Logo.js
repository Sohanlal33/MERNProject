import React from 'react'
import logoPlaceholder from '../resources/images/logoPlaceholder.svg';

export const Logo = ({ text }) => (
        <div className='auth-form-logo-container'>
            <img src={logoPlaceholder} alt="Logo" />
            <span>&nbsp;&nbsp; {text} </span>
        </div>
    );

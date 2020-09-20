import React from 'react';
import { Link } from 'react-router-dom';

import './Button.css';

const Button = (props) => {
    const {  
        children,
        type,
        onClick,
        buttonStyle,
        buttonSize
    }=props;


const STYLES = ['btn--primary', 'btn--outline', 'btn--test'];

const SIZES = ['btn--medium', 'btn--large'];

const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]; //<<includes>>  methoda ete neraruma veradarcnuma <<true>> opposite <<false>>

const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];



return (
    <Link to='/sign-up' className='btn-mobile'>
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </Link>
  );


}
export default Button;

import React from 'react';

import classes from './Button.css';

const Button = (props) => {

  let btnColor = null;
  let btnSize = null;

  if (props.children === 'AC' || props.children === '0') {
    btnSize = 'jumbo';
  }

  if (props.children === 'AC') {
    btnColor = 'red';
  } else if (props.children === '=') {
    btnColor = 'blue';
    btnSize = 'vJumbo';
  } else {
    btnColor = isNaN(props.children) ? 'NaN' : 'Number';
  }

  return <button
    disabled={props.disabled}
    className={[classes.Button, classes[btnColor], classes[btnSize]].join(' ')}
    onClick={props.clicked}>{props.children}</button>;
};

export default Button;
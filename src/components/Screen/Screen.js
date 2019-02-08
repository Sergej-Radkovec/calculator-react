import React from 'react';

import classes from './Screen.css';

const Screen = (props) => (
  <div className={classes[props.scnType]}>{props.children}</div>
);

export default Screen;
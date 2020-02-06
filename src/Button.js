import React from 'react';
import PropTypes from 'prop-types';

const theme = {
  colorVariant: {
    primary: 'red',
    secondary: 'blue',
  },
};



export const Button = ({ text, bg }) => {
  const style = {
    backgroundColor: bg,
  };
  return <button style={style}>{text}</button>;
};

Button.propTypes = {
  /** color of the button */
  bg: PropTypes.string.isRequired,
  /** text of the button color */
  text: PropTypes.string,
};

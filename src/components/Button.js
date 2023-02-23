import React from 'react';
import PropTypes from 'prop-types';

export default function Button(props) {
  const { name, addClass, onclick } = props;
  const classname = `button ${addClass}`;

  return (
    <button type="button" className={classname} onClick={onclick}>{name}</button>
  );
}

Button.defaultProps = {
  name: '?',
  addClass: '',
  onclick: undefined,
};

Button.propTypes = {
  name: PropTypes.string,
  addClass: PropTypes.string,
  onclick: PropTypes.func,
};

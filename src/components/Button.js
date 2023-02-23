import React from 'react';
import PropTypes from 'prop-types';

export default class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { name, addClass, onclick } = this.props;
    const classname = `button ${addClass}`;
    return (
      <button type="button" className={classname} onClick={onclick}>{name}</button>
    );
  }
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

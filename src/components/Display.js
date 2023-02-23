import React from 'react';
import PropTypes from 'prop-types';

export default class Display extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { value } = this.props;
    return (
      <div className="display">{ value }</div>
    );
  }
}

Display.defaultProps = {
  value: '0',
};

Display.propTypes = {
  value: PropTypes.string,
};

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Hello extends Component {
  render() {
    return (
      <div>Hello {this.props.name}, how are you?</div>
    );
  }
}

// works like validation in ruby
// PropTypes - .array - .object - .bool -  .number -  .string - (must be required) .isRequired
Hello.propTypes = {
  name: PropTypes.string.isRequired
};

// check if value is included in a array

// PropTypes.oneOf(['News', 'Photos'])


// check if prop is string or number

// PropTypes.oneOfType([
//   PropTypes.string,
//   PropTypes.number,
// ])


// check the keys inside an object

// PropTypes.shape({
//   color: PropTypes.string,
//   fontSize: PropTypes.number
// })

export default Hello;

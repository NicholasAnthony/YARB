import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Example extends Component {
  toUpper(text) {
    return text.toUpperCase();
  }

  render() {
    const {examplePropText} = this.props;
    return (
      <div className="example">
        <span className="example-text">{this.toUpper(examplePropText)}</span>
      </div>
    );
  }
}

Example.propTypes = {
  examplePropText: PropTypes.string.isRequired
};

Example.defaultProps = {
  examplePropText: 'example prop text'
};

export default Example;
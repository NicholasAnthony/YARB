import React, { Component } from 'react';
import { render } from 'react-dom';

import '../css/style.css';

import reactLogo from '../assets/reactLogo.png';

export default class Hello extends Component {
  render() {
    return (
      <div>
        <h2>React Logo</h2>
        <img src={ reactLogo } alt='React Logo' />
      </div>
    );
  }
}

render(<Hello />, document.getElementById('app'));

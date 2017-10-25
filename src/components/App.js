import React, { Component } from 'react';

import '../css/style.css';

import reactLogo from '../assets/reactLogo.png';

export default class App extends Component {
  render() {
    return (
      <div>
        <h2>YARB :: Yet Another React Boilerplate</h2>
        <img src={ reactLogo } className='reactLogo' alt='React Logo' />
      </div>
    );
  }
}

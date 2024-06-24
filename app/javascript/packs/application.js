import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from '../components/HelloWorld';
import './geolocation';
import './map';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <HelloWorld />,
    document.body.appendChild(document.createElement('div')),
  );
});
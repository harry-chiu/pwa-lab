import React from 'react';
import { render } from 'react-dom';
import { Workbox } from 'workbox-window';
import App from './App';

const element = <App />;
const container = document.getElementById('root');

render(element, container);

if ('serviceWorker' in navigator) {
  // navigator.serviceWorker.register('./service-worker.js');
  const workBox = new Workbox('service-worker.js');

  workBox.register();
}

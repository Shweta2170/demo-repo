import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

switch (script) {
  case 'build':
  case 'eject':
  case 'start':
  case 'test': {
    const result = spawn.sync(
      'node',
      [require.resolve('../scripts/' + script)].concat(args),
      { stdio: 'inherit' }
    );

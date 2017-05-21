import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

ReactDOM.render(
  <App title={'Cool Book'} author={'jSweet'} body={'my post is super cool'} comments={['ya bro','goovy moovie','chyaa']}/>,
  document.getElementById('root')
);

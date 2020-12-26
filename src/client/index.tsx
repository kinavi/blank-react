import React from 'react';
import ReactDOM from 'react-dom';

import { Welcome } from './components/Welcome';

import './style/index.sass';

const message = 'Hi, welcome to my react blank. I hope it is useful to you';

const App = () => (
  <div className="app">
    <Welcome author="Kinavi" message={message} />
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));

import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './component/App';
import Clock from './component/Clock';
import ListOfElements from './component/ListOfElements';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Clock />, document.getElementById('clock'));
ReactDOM.render(<ListOfElements />, document.getElementById('list-of-elements'));
registerServiceWorker();

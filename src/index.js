import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
import Clock from './components/Clock';
import ListOfElements from './components/ListOfElements';
import Selector from './components/Selector';
import registerServiceWorker from './registerServiceWorker';
import CommentBox from "./components/CommentBox";

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Clock />, document.getElementById('clock'));
ReactDOM.render(<ListOfElements />, document.getElementById('list-of-elements'));
ReactDOM.render(<CommentBox />, document.getElementById('comment-box'));
ReactDOM.render(<Selector />, document.getElementById('selector'));

registerServiceWorker();

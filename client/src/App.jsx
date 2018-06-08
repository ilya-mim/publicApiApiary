import React from 'react';
import ReactDom from 'react-dom';
import { browserHistory, Router } from 'react-router';
import routes from './routes';
import style from './style.css';

const App = () => (
    <Router history={browserHistory} routes={routes} />
);

ReactDom.render(<App />, document.getElementById('root'));
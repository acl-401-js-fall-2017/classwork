import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import SWApp from './SWApp';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<SWApp/>, document.getElementById('root'));
registerServiceWorker();

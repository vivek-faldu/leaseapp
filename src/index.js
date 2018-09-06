import React from 'react';
import ReactDOM from 'react-dom';
import App from './client/components/App';
import './client/css/index.css'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

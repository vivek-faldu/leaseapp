import React from 'react';
import ReactDOM from 'react-dom';
import App from './client/components/App/App';
import './client/components/App/App.css'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

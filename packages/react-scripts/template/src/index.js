import React from 'react';
import ReactDOM from 'react-dom';

import './styles/index.css';
import App from './main_app/App';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

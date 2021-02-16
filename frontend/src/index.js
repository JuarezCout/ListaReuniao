import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './main/App'
import registerServiceWorker from './registerServiceWorker'
import Amplify from 'aws-amplify';
import config from './aws-exports';

Amplify.configure(config);

console.log('App', App)

ReactDOM.render(<App    />, document.getElementById('root'))

import React from 'react'; // Required for JSX
import ReactDOM from 'react-dom'; // Correct for React 16

import './index.css';
import App from './App';
import { Provider } from './context/context'; // Importing the Provider from context
import reportWebVitals from './reportWebVitals';


ReactDOM.render(
    
<Provider> 
    <App /> 
</Provider>, 
document.getElementById('root'));
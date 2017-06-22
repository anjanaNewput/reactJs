import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import App from './appComponent.js';
import Home from './homeComponent.js';
import Form from './formComponent.js';
import Footer from './footerComponent.js';

ReactDOM.render((
    <div>
        <Router>
            <App>
                <Route path="/home" component={Home}/>
                <Route path="/form" component={Form}/>
            </App>
        </Router>
        <Footer />
    </div>
    ), document.getElementById('root'));
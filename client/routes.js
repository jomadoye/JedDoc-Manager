import React from 'react';
import { Route } from 'react-router-dom';
import App from './components/App';
import Signup from './components/Signup';
import Greeting from './components/Greetings';

class AppRoutes extends React.Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={App}/>
                <Route path="/about" component={Signup}/>
            </div>
        )
    }
}

export default AppRoutes;
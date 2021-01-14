import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    // Link,
    Redirect
} from "react-router-dom";

import AuthRouter from './AuthRouter';
import JournalScreen from '../components/journal/JournalScreen';

const AppRouter = () => {
    return (
        <Router>
            <div>
                {/* <nav>
                    <ul>
                        <li>
                            <Link to="/auth">Auth</Link>
                        </li>
                        <li>
                            <Link to="/">Journal app</Link>
                        </li>
                    </ul>
                </nav> */}
                <Switch>
                    <Route path="/auth" component={ AuthRouter } />
                    <Route exact path="/" component={ JournalScreen } />

                    <Redirect to="/auth/login"/>
                </Switch>
            </div>
        </Router>
    )
}

export default AppRouter

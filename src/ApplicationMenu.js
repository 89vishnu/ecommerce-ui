import React, {Component} from 'react';
import {Home} from './Home';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory,
    useLocation,
    useParams
} from "react-router-dom";

class ApplicationMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName : null,
            lastName : null,
            password : null,
            usersList : [],
            age : null,
            referrer : null
        }
    }

    render() {
        return(
            <Router>
                <td><Link className="sign-up-link" to="/sign-up">Sign Up</Link>Login</td>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/sign-up'/>
                </Switch>
            </Router>
        )
    }

}
export default ApplicationMenu;

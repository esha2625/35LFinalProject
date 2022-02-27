import {Link} from 'react-router-dom';

import classes from './MainNavigation.module.css';

function MainNavigation() {
    return (
    <header className={classes.header}>
        <div className={classes.logo}>Bruinfessions</div>
        <nav>
            <ul>
                <li>
                    <Link to = '/'>All Confessions</Link>
                </li>
                <li>
                    <Link to = '/create-confession'>Create Confessions</Link>
                </li>
                <li>
                    <Link to = '/login-page'>Login Page</Link>
                </li>
                <li>
                    <Link to = '/create-account'>Create Account</Link>
                </li>
            </ul>
        </nav>
    </header>
    );
}

export default MainNavigation;
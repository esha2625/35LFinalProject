import {Link} from 'react-router-dom';

import classes from './MainNavigation.module.css';

function MainNavigation() {
    return (
    <header className={classes.header}>
            <div className={classes.logo_wrap}>
                <div className={classes.logo}>Bruinfessions</div>
            </div>
        <nav>
         <div>
            <ul>
                <li>
                    <Link to = '/'>All Confessions</Link>
                </li>
                <li>
                    <Link to = '/login-page'>Login</Link>
                </li>
            </ul>
            </div>
        </nav>
    </header>
    );
}

export default MainNavigation;

import {Link} from 'react-router-dom';

import classes from './MainNavigation.module.css';

function MainNavigation() {
    return (
    <header className={classes.header}>
                 <div className={classes.logoimage}><img src="/bruinfessionslogo.png" alt="Bruinfessions" width="90ref" height="5ref"/></div> 
         <div className={classes.logo}>Bruinfessions</div>
        <nav>
         <div>
            <ul>
                <li>
                    <Link to = '/'>All Confessions</Link>
                </li>
                <li>
                    <Link to = '/create-confession'>Create Confessions</Link>
                </li>
                <li>
                    <Link to = '/favorites'>Favorites</Link>
                </li>
                <li>
                    <Link to = '/login-page'>Login</Link>
                </li>
                <li>
                    <Link to = '/create-account'>Create Account</Link>
                </li>
            </ul>
            </div>
        </nav>
    </header>
    );
}

export default MainNavigation;

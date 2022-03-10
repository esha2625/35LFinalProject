import {Link} from 'react-router-dom';
import {useState, useEffect} from 'react';
import {useAuth} from '../../store/auth-context.js';
import {useNavigate} from 'react-router-dom';

import classes from './MainNavigationLoggedIn.module.css';

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
                    <Link to = '/create-confession'>Create Confessions</Link>
                </li>
                <li>
                    <Link to = '/favorites'>Favorites</Link>
                </li>
                <li>
                    <Link to = '/'>Logout</Link>
                </li>
            </ul>
            </div>
        </nav>
    </header>
    );
}

export default MainNavigation;

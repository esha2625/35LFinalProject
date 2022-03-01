import {Link} from 'react-router-dom';

import classes from './Footer.module.css';

function Footer() {
    return (
    <footer className={classes.footer}>
        <small>&copy; Copyright 2022, Bruinfessions</small>
    </footer>
    );
}

export default Footer;

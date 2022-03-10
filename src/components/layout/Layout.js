import classes from './Layout.module.css';
import MainNavigationLoggedIn from './MainNavigationLoggedIn';
import MainNavigation from './MainNavigation';
import Footer from './Footer';
import {useAuth} from '../../store/auth-context.js';

function Layout(props) {
    const {currentUser, logout} = useAuth();

    var header_component;
    if (logout) {
        header_component = <MainNavigation/>
    } 
    if (currentUser) {
        header_component = <MainNavigationLoggedIn/>
    }
    return <div>

        {header_component}
        
        <main className={classes.main}>
        {props.children}
        </main>
        <Footer/>
    </div>
}

export default Layout;
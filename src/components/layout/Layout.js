import classes from './Layout.module.css';
import MainNavigation from './MainNavigation';
import Footer from './Footer';
function Layout(props) {
    return <div>
        <MainNavigation/>
        <main className={classes.main}>
        {props.children}
        </main>
        <Footer/>
    </div>
}

export default Layout;
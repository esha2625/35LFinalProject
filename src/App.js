import {Routes} from 'react-router-dom';
import {Route} from 'react-router-dom';
import AllConfessionsPage from './pages/AllConfessions';
import CreateConfessionsPage from './pages/CreateConfessions';
//import LoginPage from './pages/Login';
import FavoritesPage from './pages/Favorites';
import Login_Kat from './pages/Login_Kat'
import LogoutPage from './pages/LogoutPage'
import CreateAccountPage from './pages/CreateAccount';
import MainNavigation from './components/layout/MainNavigation';
import Layout from './components/layout/Layout';
import { AuthProvider } from './store/auth-context';
import {PrivateRoute} from './components/layout/PrivateRoute';

function App() {
  return (
  <AuthProvider>
   <Layout>
      <Routes>
        <Route exact path="/" element={<AllConfessionsPage />} />
       {/*} <Route path="/create-confession" element={<CreateConfessionsPage />} /> */}
       <Route exact path='/create-confession' element={<PrivateRoute/>}>
            <Route exact path='/create-confession' element={<CreateConfessionsPage/>}/>
        </Route>
        <Route path="/login-page" element={<Login_Kat />} />
        <Route path="/logout-page" element={<LogoutPage/>} />
        <Route path="/create-account" element={<CreateAccountPage/>} />
        <Route exact path='/favorites' element={<PrivateRoute/>}>
            <Route exact path='/favorites' element={<FavoritesPage/>}/>
        </Route>
       {/* <Route path='/favorites' element={<FavoritesPage />} /> */}
      </Routes>
  </Layout>
  </AuthProvider>
  );
}

export default App;

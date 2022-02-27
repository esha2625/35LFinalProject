import {Routes} from 'react-router-dom';
import {Route} from 'react-router-dom';
import AllConfessionsPage from './pages/AllConfessions'
import CreateConfessionsPage from './pages/CreateConfessions'
import LoginPage from './pages/Login'
import CreateAccountPage from './pages/CreateAccount'
import MainNavigation from './components/layout/MainNavigation';
import Layout from './components/layout/Layout';
function App() {
  return (
   <Layout> 
      <Routes>
        <Route path="/" element={<AllConfessionsPage />} />
        <Route path="/create-confession" element={<CreateConfessionsPage />} />
        <Route path="/login-page" element={<LoginPage />} />
        <Route path="/create-account" element={<CreateAccountPage/>} />
      </Routes>
  </Layout>
  );
}

export default App;

import {Routes} from 'react-router-dom';
import {Route} from 'react-router-dom';
import AllConfessionsPage from './pages/AllConfessions'
import CreateConfessionsPage from './pages/CreateConfessions'
import MainNavigation from './components/layout/MainNavigation';
import Layout from './components/layout/Layout';
function App() {
  return (
   <Layout> 
      <Routes>
        <Route path="/" element={<AllConfessionsPage />} />
        <Route path="/create-confession" element={<CreateConfessionsPage />} />
      </Routes>
  </Layout>
  );
}

export default App;

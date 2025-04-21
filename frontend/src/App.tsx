import { Routes, Route, useLocation } from 'react-router-dom';
import Login from './pages/login';
import Navbar from './components/navbar';
import Home from './pages/home';
import Recipes from './pages/recipes';
import GroceryList from './pages/grocery-list';

const App = () => {
  const location = useLocation();

  // Define an array of paths where the Navbar should be shown
  const pathsWithNavbar = ['/home', '/recipes', '/grocery-list'];

  return (
    <>
      {pathsWithNavbar.includes(location.pathname) && <Navbar />}
      
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/grocery-list" element={<GroceryList />} />
      </Routes>
    </>
  );
};

export default App;

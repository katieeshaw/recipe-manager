// src/App.tsx
import { Routes, Route } from 'react-router-dom';
import Login from './pages/login';
// import other pages if needed

const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      {/* Add other routes like dashboard, home, etc. */}
    </Routes>
  );
};

export default App;

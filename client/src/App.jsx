import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import LoginPage from './pages/LoginPage';
import UserHome from './pages/UserHome';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/:id' element={<UserHome />} />
      </Routes>
    </Router>
  );
}

export default App;

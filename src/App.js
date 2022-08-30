import './App.css';
import Login from './pages/Login';
import FormPage from './pages/FormPage'
import IdCardPage from './pages/IdCardPage';
import IdPage from './pages/IdPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/form' element={<FormPage />} />
        <Route path='/id' element={<IdPage />} />
        <Route path='/id-card' element={<IdCardPage />} />
      </Routes>
    </Router>
  );
}

export default App;

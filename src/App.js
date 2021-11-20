import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import DetailPage from './pages/DetailPage';
import MainPage from './pages/MainPage';
import ErrorPage from './pages/ErrorPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="details" element={<DetailPage />} />
      <Route path="main" element={<MainPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;

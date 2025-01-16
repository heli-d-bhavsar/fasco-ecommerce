import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { BrowserRouter, Route, Routes } from 'react-router';
import SignUp from './pages/signup/index.tsx';
import LandingPage from './pages/landing-page/index.tsx';

// const root = document.getElementById('root');

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route index element={<LandingPage />} />

      <Route>
        <Route path='signup' element={<SignUp />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

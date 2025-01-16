import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { BrowserRouter, Route, Routes } from 'react-router';
import SignUp from './pages/signup/index.tsx';
// const root = document.getElementById('root');

createRoot(document.getElementById('root')!).render(
  <BrowserRouter basename={import.meta.env.BASE_URL}>
    <Routes>
      <Route index element={<App />} />
      <Route>
        <Route path='signup' element={<SignUp />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

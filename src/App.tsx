import { BrowserRouter, Routes, Route } from 'react-router';
import SignUp from './pages/signup';
import Home from './pages/home';
import { AuthProvider } from './context/AuthContext';
import Layout from './components/common/Layout';
import Shop from './pages/shop';
function App() {
  return (
    <AuthProvider>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='shop' element={<Shop />} />
          </Route>
          <Route path='signup' element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;

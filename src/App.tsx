import { BrowserRouter, Routes, Route } from 'react-router';
import SignUp from './pages/signup';
import Home from './pages/home';
import { AuthProvider } from './context/AuthContext';
import Layout from './components/common/Layout';
import Shop from './pages/shop';
import ProductDetail from './pages/product';
import { ProductProvider } from './context/ProductContext';
import ShoppingCart from './pages/shopping-cart';
function App() {
  return (
    <AuthProvider>
      <ProductProvider>
        <BrowserRouter basename={import.meta.env.BASE_URL}>
          <Routes>
            <Route element={<Layout />}>
              <Route index element={<Home />} />
              <Route path='shop' element={<Shop />} />
              <Route path='product' element={<ProductDetail />} />
              <Route path='cart' element={<ShoppingCart />} />
            </Route>

            <Route path='signup' element={<SignUp />} />
          </Routes>
        </BrowserRouter>
      </ProductProvider>
    </AuthProvider>
  );
}

export default App;

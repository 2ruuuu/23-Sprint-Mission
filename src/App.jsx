import { Route, Routes } from 'react-router-dom';
import ItemsPage from './pages/ItemsPage';
import AddItemPage from './pages/AddItemPage';
import ProductDetailPage from './pages/ProductDetailPage';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/items" element={<ItemsPage />} />
      <Route path="/additem" element={<AddItemPage />} />
      <Route path="/items/:productId" element={<ProductDetailPage />} />
    </Routes>
  );
}

export default App;

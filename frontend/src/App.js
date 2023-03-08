import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage'
import LoginPage from './pages/LoginPage';
import ProductDeteailsPage from './pages/ProductDetailsPage';
import ProductListPage from './pages/ProductListPage';
import RegisterPage from './pages/RegisterPage';

//Protected User Routes
import ProtectedRoutesComponent from './components/ProtectedRoutesComponent';
import UserProfilePage from './pages/User/UserProfilePage';
import UserCartDetailsPage from './pages/User/UserCartDetailsPage';
import UserOrderDetailsPage from './pages/User/UserOrderDetailsPage';
import UserOrdersPage from './pages/User/UserOrdersPage';

// Protected Admin pages
import AdminUsersPage from './pages/Admin';
import AdminProductsPage from './pages/AdminProductsPage';
import AdminOrdersPage from './pages/AdminOrdersPage';
import AdminOrderDetailsPage from './pages/AdminOrderDetailsPage';
import AdminEditUserPage from './pages/AdminEditUserPage';
import AdminEditProductPage from './pages/AdminEditProductPage';
import AdminCreateProductPage from './pages/AdminCreateProductPage';
import AdminChatsPage from './pages/AdminChatsPage';
import AdminAnlyticsPage from './pages/AdminAnlyticsPage';


function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path ="/" element={ <HomePage /> } />
            <Route path='/product-list' element={ <ProductListPage /> } />
            <Route path='/product-details/:id' element={ <ProductDeteailsPage /> } />
            <Route path="/login" element={ < LoginPage /> } />
            <Route path ="/cart" element={ <CartPage /> } />
            <Route path="/register" element={ <RegisterPage /> } />
            <Route path="/*" element="Page Does Not Exist 404" />

            {/* User Protected Routes */}
            <Route element={ <ProtectedRoutesComponent admin={false} /> } >
                <Route path="/user" element={ <UserProfilePage /> } />
                <Route path="/user/cart-details" element={ <UserCartDetailsPage /> } />
                <Route path="/user/my-orders" element={ <UserOrdersPage /> } />
                <Route path="/user/order-details" element={ <UserOrderDetailsPage /> } />
                <Route path="/user/profile" element={ <UserProfilePage /> } />
            </Route>
            {/* Admin Protected Routes */}
            <Route element={<ProtectedRoutesComponent admin={true} /> } >
                <Route path="/admin/users" element={ <AdminUsersPage /> } />
                <Route path="/admin/edit-users" element={ <AdminEditUserPage /> } />
                <Route path="/admin/products" element={ <AdminProductsPage /> } />
                <Route path="/admin/create-new-product" element={ <AdminCreateProductPage /> } />
                <Route path="/admin/edit-product" element={ <AdminEditProductPage /> } />
                <Route path="/admin/orders" element={ <AdminOrdersPage /> } />
                <Route path="/admin/oder-details" element={ <AdminOrderDetailsPage /> } />
                <Route path="/admin/chats" element={ <AdminChatsPage /> } />
                <Route path="/admin/analytics" element={ <AdminAnlyticsPage /> } />
            </Route>
            
        </Routes>
    </BrowserRouter>

  );
}

export default App;

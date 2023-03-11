import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage'
import LoginPage from './pages/LoginPage';
import ProductDeteailsPage from './pages/ProductDetailsPage';
import ProductListPage from './pages/ProductListPage';
import RegisterPage from './pages/RegisterPage';

// Components:
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';

// User Components
import RoutesWithUserChatComponent from './components/user/RoutesWithUserChatComponent';

// Protected User Routes
import ProtectedRoutesComponent from './components/ProtectedRoutesComponent';
import UserProfilePage from './pages/user/UserProfilePage';
import UserCartDetailsPage from './pages/user/UserCartDetailsPage';
import UserOrderDetailsPage from './pages/user/UserOrderDetailsPage';
import UserOrdersPage from './pages/user/UserOrdersPage';

// Protected Admin pages
import AdminUsersPage from './pages/admin/AdminUsersPage';
import AdminProductsPage from './pages/admin/AdminProductsPage';
import AdminOrdersPage from './pages/admin/AdminOrdersPage';
import AdminOrderDetailsPage from './pages/admin/AdminOrderDetailsPage';
import AdminEditUserPage from './pages/admin/AdminEditUserPage';
import AdminEditProductPage from './pages/admin/AdminEditProductPage';
import AdminCreateProductPage from './pages/admin/AdminCreateProductPage';
import AdminChatsPage from './pages/admin/AdminChatsPage';
import AdminAnlyticsPage from './pages/admin/AdminAnalyticsPage';


function App() {
    return (
        <BrowserRouter>
            <HeaderComponent />
            <Routes>
                <Route element={ <RoutesWithUserChatComponent /> }>
                    <Route path="/" element={<HomePage />} />
                    <Route path='/product-list' element={<ProductListPage />} />
                    <Route path='/product-details' element={<ProductDeteailsPage />} />
                    <Route path="/login" element={< LoginPage />} />
                    <Route path="/cart" element={<CartPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="/*" element="Page Does Not Exist 404" />
                </Route>

                {/* User Protected Routes */}
                <Route element={<ProtectedRoutesComponent admin={false} />} >
                    <Route path="/user" element={<UserProfilePage />} />
                    <Route path="/user/cart-details" element={<UserCartDetailsPage />} />
                    <Route path="/user/my-orders" element={<UserOrdersPage />} />
                    <Route path="/user/order-details" element={<UserOrderDetailsPage />} />
                </Route>


                {/* Admin Protected Routes */}
                <Route element={<ProtectedRoutesComponent admin={true} />} >
                    <Route path="/admin/users" element={<AdminUsersPage />} />
                    <Route path="/admin/edit-users" element={<AdminEditUserPage />} />
                    <Route path="/admin/products" element={<AdminProductsPage />} />
                    <Route path="/admin/create-new-product" element={<AdminCreateProductPage />} />
                    <Route path="/admin/edit-product" element={<AdminEditProductPage />} />
                    <Route path="/admin/orders" element={<AdminOrdersPage />} />
                    <Route path="/admin/oder-details" element={<AdminOrderDetailsPage />} />
                    <Route path="/admin/chats" element={<AdminChatsPage />} />
                    <Route path="/admin/analytics" element={<AdminAnlyticsPage />} />
                </Route>
            </Routes>
            <FooterComponent />
        </BrowserRouter>

    );
}

export default App;
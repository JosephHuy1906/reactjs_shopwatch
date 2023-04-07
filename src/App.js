import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './pages/Client/Home';
import Product from './pages/Client/Product';
import ProductDetail from './pages/Client/ProductDetail';
import Cart from './pages/Client/Cart';
import RootLayout from './pages/Client/Root';
import Error from './pages/Client/Error';
import Profile from './pages/Client/Profile';
import Login from './pages/Client/Login';
import Regin from './pages/Client/Regin';
import Checkout from './pages/Client/Checkout';
import Info from './pages/Client/Info';
import OderUser from './pages/Client/OderUser';

//Admin
import AdminLayout from './pages/Admin/AdminLayout';
import HomeAdmin from './pages/Admin/Home';
import Oder from './pages/Admin/Oder';
import User from './pages/Admin/User';
import ProductAdmin from './pages/Admin/Product';
import Category from './pages/Admin/Category';


const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        errorElement: <Error />,
        children: [
            { index: true, element: <Home /> },
            { path: 'shop', element: <Product /> },
            { path: 'productdetail/:id', element: <ProductDetail /> },
            { path: 'cart', element: <Cart /> },
            {
                path: 'profile',
                element: <Profile />,
                children: [
                    { index: true, element: <OderUser /> },
                    { path: 'info', element: <Info /> },
                ],
            },
            { path: 'login', element: <Login /> },
            { path: 'regin', element: <Regin /> },
            { path: 'checkout', element: <Checkout /> },
        ],
    },
    {
        path: '/admin',
        element: <AdminLayout />,
        children: [
            { index: true, element: <HomeAdmin /> },
            { path: 'product', element: <ProductAdmin /> },
            { path: 'user', element: <User /> },
            { path: 'oder', element: <Oder /> },
            { path: 'cate', element: <Category /> },

        ],
    },
]);
function App() {
    return <RouterProvider router={router} />;
}

export default App;

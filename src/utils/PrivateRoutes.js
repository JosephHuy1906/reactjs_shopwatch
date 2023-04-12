import { Outlet, Navigate } from 'react-router-dom';

const PrivateRoutes = () => {
    let token = localStorage.getItem('token');
    let auth = { token: true };
    if (token == null || token == '') {
        auth = { token: false };
    }

    return auth.token ? <Outlet /> : <Navigate to={'/login'} />;
};

export default PrivateRoutes;

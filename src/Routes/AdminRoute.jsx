import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { ColorRing } from 'react-loader-spinner';
import { Navigate, useLocation } from 'react-router-dom';
import useAdmin from '../hooks/useAdmin';

const AdminRoute = ({children}) => {
    const{user, loading} = useContext(AuthContext);
    const [isAdmin, isAdminLoading] = useAdmin();
    const location = useLocation();
    if(loading || isAdminLoading){
        return <ColorRing
        visible={true}
        height="80"
        width="80"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
      />
    }
    if(user && isAdmin){
        return children;
    }
    return <Navigate to="/dashboard" state={{from: location}} replace></Navigate>
};

export default AdminRoute;
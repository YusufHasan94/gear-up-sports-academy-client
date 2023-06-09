import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from 'react-query';

const useAdmin = () => {
    const {user, loading} = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();
    const {data:isAdmin, isLoading: isAdminLoading}= useQuery({
        queryKey: ['isAdmin', user?.email],
        enabled: !loading,
        queryFn: async()=>{
            const result = await axiosSecure.get(`/users/admin/${user?.email}`);
            return result.data.admin;
        }
    })
    return [isAdmin, isAdminLoading]
};

export default useAdmin;
import { useContext } from 'react';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from 'react-query';
import { AuthContext } from '../providers/AuthProvider';

const useInstructor = () => {
    const {user, loading} = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();
    const {data:isInstructor, isLoading: isInstructorLoading}= useQuery({
        queryKey: ['isInstructor', user?.email],
        enabled: !loading,
        queryFn: async()=>{
            const result = await axiosSecure.get(`/users/instructor/${user?.email}`);
            return result.data.admin;
        }
    })
    return [isInstructor, isInstructorLoading]
};

export default useInstructor;
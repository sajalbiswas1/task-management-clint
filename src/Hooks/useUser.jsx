import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import useAxios from "./useAxios";
import { useQuery } from "@tanstack/react-query";

const useUser =() =>{
    const { user } = useContext(AuthContext);
    const axiosApi = useAxios()
    const { data } = useQuery({
        enabled: !!user?.email,
        queryKey: ['request', user?.email],
        queryFn: async () => {
            const response = await axiosApi.get(`/user?email=${user?.email}`)
            return response.data;
        }
    });
    return data;
}
export default useUser;

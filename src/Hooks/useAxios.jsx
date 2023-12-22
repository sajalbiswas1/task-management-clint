import axios from "axios";
// use Hooks
const axiosApi = axios.create({
    baseURL:'http://localhost:5000'

    // http://localhost:5000
})
const useAxios = ()=>{
    return axiosApi;
}
export default useAxios;
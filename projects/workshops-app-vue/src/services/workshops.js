import axios from 'axios';
import Config from "@/config";

const { baseUrl } = Config;

const getWorkshops = () => {
   const response = await  axios.get(`${baseUrl}/workshops`);
    return response.data;  
}

// export { 
//     getWorkshops()
// }
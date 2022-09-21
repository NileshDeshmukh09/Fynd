import axios from 'axios';
import Config from '@/config';

const { baseUrl } = Config;

const scheduleAMeet = async (  ) => {
    const response = await axios.post( `${baseUrl}/api/meetings`, {
       
        // headers: {
        //     Authorization: 'skdbvkbvebvkb',
        // }
    } );
    return response.data;
};

export {
    scheduleAMeet,
};
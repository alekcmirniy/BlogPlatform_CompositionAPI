import { useAxiosRequest } from '../composables/useAxiosRequest';
import { useHandleError } from '../composables/useHandleError';
import { } from 'jest'
import axios from "axios";

const useAxios = () => {
    const { handleError } = useHandleError();

    const cb = async () => {
        let isLoading = false;
        try {
            isLoading = true;
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
            console.log(response);
            if (response.status === 200) {
                return response;
            }
        }
        catch (error: any) {
            handleError(error);
            return undefined;
        }
        finally {
            isLoading = false;
        }
    }
    const { currentData } = useAxiosRequest(cb, {})
    console.log(currentData);
}
const sum = require('./sum');

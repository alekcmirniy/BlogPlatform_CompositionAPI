import axios from "axios";
import { useHandleError } from "./useHandleError";
import { ref, watch } from "vue";
import type { RequestType } from "@/utils/types";
import type { ApiResponse } from "@/utils/interfaces";

const isLoading = ref(false);

export const useAxiosRequest = (url: string, method: RequestType, data?: {}, params?: {}) => {

    const responseData = ref<ApiResponse<{}> | null>(null);
    const error = ref<Error | null>(null);

    const fetchData = async () => {
        try {
            isLoading.value = true;

            const response = await axios.request<ApiResponse<{}>>({
                method,
                url,
                data,
                params
            });
            responseData.value = response.data;
        }
        catch (e: any) {
            console.error('error!');        //
        }
        finally {
            isLoading.value = false;
        }
    }

    return { responseData, fetchData, isLoading };
}
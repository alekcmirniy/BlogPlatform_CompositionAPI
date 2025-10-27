import { reactive, watch } from "vue";

const DEFAULT_ERROR_VALUES = {
    name: '',
    message: ''
} as Error;

let errorQueue = reactive<Error[]>([]);
let currentError = reactive<Error>(DEFAULT_ERROR_VALUES);

export const useHandleError = () => {

    const pushErrorInQueue = (error: Error) => {
        errorQueue.push(error);
    }

    const getErrorFromQueue = () => {
        return errorQueue.length > 0 ? errorQueue.shift()! : structuredClone(DEFAULT_ERROR_VALUES);
    }

    const closeError = () => {
        currentError.message = '';
        currentError.name = '';
    }

    watch(errorQueue, (newValue) => {
        if (newValue.length > 0) {
            const error = getErrorFromQueue();
            currentError.name = error.name;
            currentError.message = error.message;
        }
    }, { deep: true });

    return { currentError, handleError: pushErrorInQueue, closeError: closeError };
}
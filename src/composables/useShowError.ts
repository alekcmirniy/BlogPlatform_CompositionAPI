import { reactive, watch } from "vue";

const defaultErrorValues: Error = {
    name: '',
    message: ''
}

export const useShowErrors = () => {
    let errorQueue = reactive<Error[]>([]);
    let currentError = reactive({ ...defaultErrorValues });

    const pushErrorInQueue = (error: Error) => {
        errorQueue.unshift(error);
    }

    const getLastErrorInQueue = () => {
        return errorQueue.length > 0 ? errorQueue.pop()! : { ...defaultErrorValues };
    }

    watch(errorQueue, (newValue) => {
        if (newValue.length > 0) {
            const error = getLastErrorInQueue();
            currentError.name = error.name;
            currentError.message = error.message;
        }
    }, { deep: true });

    return { handleError: pushErrorInQueue, currentError };
}
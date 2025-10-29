import { ref, watch } from "vue";

const TIME_CONTROL_PARAM = 15000;
const timesMap = new Map<string, number>();
const dataMap = new Map<string, any>();

export const useAxiosRequest = (cb: () => Promise<any>, keys: any) => {
    const currentData = ref({});

    const refetch = async (newValue: any) => {
        const now = new Date().getTime();
        const isOld = dataMap.has(newValue) && timesMap.has(newValue) && (now - timesMap.get(newValue)! < TIME_CONTROL_PARAM);

        if (isOld) {
            return dataMap.get(newValue);
        }
        else {
            const response = await cb();
            if (!response) return;

            dataMap.set(newValue, response);
            timesMap.set(newValue, now);
            currentData.value = dataMap.get(newValue);

            setTimeout(() => {
                dataMap.delete(newValue);
                timesMap.delete(newValue);
                console.log('now you can');
            }, TIME_CONTROL_PARAM);
        }
    }

    watch(() => JSON.stringify(keys), async (newValue) => {
        const data = await refetch(newValue);
        currentData.value = data;
    }, { immediate: true });
    return { currentData }
}
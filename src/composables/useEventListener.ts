import { onMounted, onUnmounted } from "vue"

export const useEventListener = (target: HTMLElement, event: Event, callback: Function) => {
    onMounted(() => target.addEventListener(event, callback));
    onUnmounted(() => target.removeEventListener(event, callback));
}
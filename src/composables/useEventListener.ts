import { onMounted, onUnmounted } from "vue"

export const useEventListener = (target: HTMLElement, event: string, callback: (event?: Event) => void) => {
    onMounted(() => target.addEventListener(event, callback));
    onUnmounted(() => target.removeEventListener(event, callback));
}
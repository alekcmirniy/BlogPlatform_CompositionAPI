<script setup lang="ts">
    import { useHandleError } from '@/composables/useHandleError';
    import { computed, ref } from 'vue';

    const { currentError, handleError, closeError } = useHandleError();
    
    const isCurrentError = computed(() => {
        return Object.keys(currentError).length ? true : false;
    })
    
    const isErrorMessageVisible = ref(false);

    const switchErrorMessageVisibility = () => {
        isErrorMessageVisible.value = !isErrorMessageVisible.value;
    }

    const buttonMessage = computed(() => {
        return isErrorMessageVisible ? 'Скрыть' : 'Показать';
    })

</script>

<template>
    <aside v-if="isCurrentError" class="error-container">
        <p>⚠ Ошибка: тип {{ currentError.name }}</p>
        <button @click="switchErrorMessageVisibility" type="button">{{ buttonMessage }}</button>
        <div class="error-description">
            {{ currentError.message }}
        </div>
        <button @click="closeError" class="close-window-button" type="button">✕</button>
    </aside>
</template>

<style scoped lang="scss">

.error-container {
    width: min(300px, 70%);
    height: 200px;
    border: solid 1px black;
    position: relative;

    .close-window-button {
        position:absolute;
        top: 0;
        right: 0;
    }
}
</style>
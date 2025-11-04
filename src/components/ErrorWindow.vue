<template>
    <aside v-if="isCurrentError" class="error-container">
        <h3 class="error-header">⚠ Ошибка {{ currentError.name }}</h3>
        <button @click="switchErrorMessageVisibility" type="button" class="default-button">{{ buttonMessage }}</button>
        <div v-if="isErrorMessageVisible" class="error-message">
            {{ currentError.message }}
        </div>
        <button @click="handleCloseWindow" class="default-close-button" type="button">✕</button>
    </aside>
</template>

<script setup lang="ts">
import { useHandleError } from '@/composables/useHandleError';
import { computed, ref } from 'vue';

const { currentError, closeError: closeWindow } = useHandleError();

const handleCloseWindow = () => {

    switchErrorMessageVisibility();
    closeWindow();
}

const isCurrentError = computed(() => {
    return (currentError.message.length && currentError.name.length);
})

const isErrorMessageVisible = ref(false);

const switchErrorMessageVisibility = () => {
    isErrorMessageVisible.value = !isErrorMessageVisible.value;
}

const buttonMessage = computed(() => {
    return isErrorMessageVisible.value ? 'Свернуть' : 'Показать';
})
</script>

<style scoped lang="scss">
.error-container {
    --close-button-height: 30px;
    width: min(320px, 70%);
    padding: calc(var(--close-button-height) + 10px) 15px 20px;
    border-radius: 14px;
    border-top-right-radius: 0;
    position: absolute;
    right: 0;
    top: 0;
    font-size: 22px;
    color: #f9f5fa;
    background: linear-gradient(135deg, rgba(73, 65, 70, 0.95), rgba(33, 112, 182, 0.95));
    backdrop-filter: blur(2x);
    box-shadow: 0 0 25px rgba(200, 150, 250, 0.3);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    animation: fadeIn 0.4s ease-out;

    .error-header {
        font-size: 24px;
        font-weight: 600;
        text-align: center;
        color: #ff3ea5;
        text-shadow: 0 0 6px rgba(255, 150, 220, 0.2);
        word-break: break-word;
    }

    .error-message {
        max-width: 100%;
        padding: 8px 10px;
        background: rgba(255, 255, 255, 0.15);
        border-radius: 10px;
        border: 1px solid rgba(255, 255, 255, 0.3);
        color: #fff;
        font-size: 16px;
        line-height: 1.3;
        word-break: break-word;
        overflow: hidden;
        text-overflow: ellipsis;
        transition: max-height 0.4s ease, opacity 0.4s ease;
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(-10px);
        }

        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
}
</style>
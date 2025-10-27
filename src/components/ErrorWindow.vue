<script setup lang="ts">
    import { useHandleError } from '@/composables/useHandleError';
    import { computed, ref } from 'vue';

    const { currentError, closeError: closeWindow } = useHandleError();
    
    const isCurrentError = computed(() => {
        return (currentError.message.length && currentError.name.length) ? true : false;
    })
    
    const isErrorMessageVisible = ref(false);

    const switchErrorMessageVisibility = () => {
        isErrorMessageVisible.value = !isErrorMessageVisible.value;
    }

    const buttonMessage = computed(() => {
        return isErrorMessageVisible.value ? 'Показать' : 'Развернуть';
    })
//использовать класс defaultButton
</script>

<template>
    <aside v-if="isCurrentError" class="error-container">
            <h3 class="error-header">⚠ Ошибка {{ currentError.name }}</h3>
            <button @click="switchErrorMessageVisibility" type="button" class="show-error-message-button">{{ buttonMessage }}</button>
            <div v-if="isErrorMessageVisible" class="error-message">
                {{ currentError.message }}
            </div>
            <button @click="closeWindow" class="close-window-button" type="button">✕</button>
    </aside>
</template>

<style scoped lang="scss">
@mixin button-props {
    border-radius: 10px;
    padding: 8px 10px;
    font-size: 18px;
    width: 150px;
    color: #fff;
    background: linear-gradient(135deg, #ff7bbf, #6dcff6);
    box-shadow: 0 0 8px rgba(26, 21, 24, 0.5), 0 0 15px rgba(120, 200, 255, 0.4);
    border: none;
    transition: all 0.3s ease;

    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 0 12px rgba(255, 180, 230, 0.7), 0 0 20px rgba(130, 210, 255, 0.6);
    }

    &:active {
        transform: scale(0.97);
    }
}

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

    .show-error-message-button {
        @include button-props;
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

    .close-window-button {
        @include button-props;
        height: var(--close-button-height);
        width: var(--close-button-height);
        font-size: 16px;
        padding: 0;
        position: absolute;
        top: 0;
        right: 0;
        border-radius: 0 10px 0 10px;
        background: linear-gradient(135deg, #ff9acb, #8fd8ff);
        }
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

</style>
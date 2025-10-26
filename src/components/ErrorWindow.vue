<script setup lang="ts">
    import { useShowError } from '@/composables/useShowError';
    const { error, showError } = useShowError();
</script>

<template>
    <aside v-if="error.isErrorVisible" class="error-container">
        <p>Уведомление об ошибке</p>
        <button type="button">Показать</button>
        <div class="error-description"></div>
    </aside>

</template>

<style scoped lang="scss">

.error-container {
    width: min(300px, 70%);
    height: 200px;
    border: solid 1px black;
}
</style>
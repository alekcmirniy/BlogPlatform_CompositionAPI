<template>
    <h1>О нас</h1>
    <p>Repeater demonstration(check console)</p>
    <button @click="startRepeater" class="default-button">Запуск</button>
    <button @click="pauseRepeater" class="default-button">Пауза</button>
    <button @click="stopRepeater" class="default-button">Стоп</button>
</template>

<script setup lang="ts">
import { Repeater } from '@/tasks/Repeater';

const RepeaterSingletone = Repeater.getInstance();

const startRepeater = () => {
    if (RepeaterSingletone) {
        RepeaterSingletone.start();
    }
}

const pauseRepeater = () => {
    if (RepeaterSingletone) {
        RepeaterSingletone.pause();
    }
}

const stopRepeater = () => {
    if (RepeaterSingletone) {
        RepeaterSingletone.stop();
    }
}

</script>

<style lang="scss" scoped></style>
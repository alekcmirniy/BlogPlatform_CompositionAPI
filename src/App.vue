<script setup lang="ts">
import NavigationComponent from './components/NavigationComponent.vue';
import { Repeater } from './tasks/Repeater';

Repeater.createInstance(1000, () => console.log('Выполнение функции...'));

</script>

<template>
  <header>
    <NavigationComponent />
  </header>
  <main>
    <RouterView />
  </main>
</template>

<style scoped></style>
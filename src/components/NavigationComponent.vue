<script setup lang="ts">
import { reactive } from 'vue';
import '@/main.scss';
    const links = reactive([ { path: "/", name: "home" }, { path: "/news", name: "news" } ]);


</script>

<template>
    <ul class="container">
        <li v-for="link in links" :key="link.name">
            <router-link :to='link.path' class="default-button" active-class="router-link-active" aria-current="page">Go to {{ link.name }}</router-link>
        </li>
    </ul>
</template>

<style lang="scss" scoped>
.container {
    position: fixed;
    bottom: 0;
    width: 100%;
    display: flex;
    justify-content: space-around;
    list-style-type: none;
}
</style>
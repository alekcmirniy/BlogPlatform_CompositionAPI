<template>
    <div class="background-layer">
        <ul class="container">
            <li v-for="link in links" :key="link.name">
                <router-link :to='link.path' class="link" active-class="router-link-active" aria-current="page">{{
                    link.name }}</router-link>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const links = ref([
    { path: '/', name: "Главная" },
    { path: "/posts", name: "Публикации" },
    { path: '/repeater', name: 'Repeater' },
    { path: '/directory', name: 'Directory' },
]);
</script>

<style lang="scss" scoped>
@use '@/styles/_mixins' as mixins;
$panel-height: 50px;

.background-layer {
    width: 100%;
    height: $panel-height;
    margin-bottom: 25px;
    background: #8585de;
    background: radial-gradient(circle, rgba(133, 133, 222, 1) 0%, rgba(121, 168, 219, 1) 57%, rgba(180, 190, 207, 1) 100%);
    border-bottom-left-radius: 25px;
    border-bottom-right-radius: 25px;
}

.container {
    margin: auto;
    width: min(1000px, 80%);
    display: flex;
    justify-content: space-around;
    align-items: center;
    list-style-type: none;
    height: 100%;
}

.link {
    @include mixins.default-button-props();
    display: block;
    padding: 10px;
    width: 125px;
    text-align: center;
}

.router-link-active {
    width: 300px;
}
</style>
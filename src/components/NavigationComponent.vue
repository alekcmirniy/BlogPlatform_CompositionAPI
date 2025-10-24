<script setup lang="ts">
import { reactive } from 'vue';
    const links = reactive([ { path: "/", name: "home" }, { path: "/news", name: "news" } ]);
</script>

<template>
    <ul class="container">
        <li v-for="link in links" :key="link.name">
            <router-link :to='link.path' class="nav-link" active-class="router-link-active" aria-current="page">Go to {{ link.name }}</router-link>
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
.nav-link {
    text-decoration: none;
    border: solid 2px rgb(78, 67, 47);
    color: white;
    background-color: rgb(54, 133, 202);
    border-radius: 14px;
    padding: 12px 20px;
    font-size: 24px;
}
</style>
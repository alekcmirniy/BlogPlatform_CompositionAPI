<template>
    <div class="container">
        <div>
            <p>Недавние</p>
            <p>Популярные</p>
            <p>Составлены вами</p>
        </div>
        <button @click="handleNewPostButton" class="default-button">Создать</button>
    </div>
    <!--{{ responseData }} !-->
</template>

<script setup lang="ts">

const handleNewPostButton = () => {
    ;
}
// import { onMounted } from 'vue';
// import { useAxiosRequest } from '@/composables/useAxiosRequest';

// const { responseData, doFetchData } = useAxiosRequest('https://httpbin.org/get', 'get');

// onMounted(() => {
//     try {
//         doFetchData()
//     }
//     catch(e) {
//         throw e;
//     }
// })

</script>

<style lang="scss" scoped>
.container {
    display: flex;
}
</style>
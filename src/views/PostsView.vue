<template>
    <div class="container">
        <div class="main-content-container">
            <div class="header-menu">
                <h3 @click="filterData('new')" class="default-block-name filters">Недавние</h3>
                <h3 @click="filterData('popular')" class="default-block-name filters">Популярные</h3>
                <h3 @click="filterData('own')" class="default-block-name filters">Составлены вами</h3>
            </div>
            <button @click="handleNewPostButton" class="default-button new-post-button">
                {{ handleNewPostButtonText }}</button>
            <main class="posts-container">
                постыпостыпостыпостыпостыпостыпостыпостыпостыпостыпостыпостыпостыпостыпостыпостыпостыпостыпостыпостыпостыпостыпостыпостыпостыпостыпостыпостыпостыпостыпостыпостыпостыпостыпостыпостыпостыпостыпостыпостыпостыпостыпостыпосты
                посты
            </main>
        </div>
    </div>

</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue';
import { useAxiosRequest } from '@/composables/useAxiosRequest';
import type { allowedPostFilters } from '@/utils/types';
import { ref } from 'vue';
import { useHandleError } from '@/composables/useHandleError';
import axios from 'axios';

// const cb = async () => {

//     const response = await axios.get('https://jsonplaceholder.typicode.com/users');
//     console.log(response);
//     if (response.status === 200) {
//         return response;
//     }
// }
// const { currentData } = useAxiosRequest(cb, {})

const filterData = (str: allowedPostFilters) => {
    //тут будет запрос на получение постов в соответствии с выбранным фильтром
}
onMounted(() => filterData('new'));

const isNewPostWriting = ref(false);
const handleNewPostButtonText = computed(() => isNewPostWriting.value ? 'Отменить создание' : 'Создать')
const handleNewPostButton = () => {
    isNewPostWriting.value = !isNewPostWriting.value;
}

</script>

<style lang="scss" scoped>
.container {
    width: 100vw;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .header-menu {
        width: 100%;
        display: flex;
        justify-content: space-around;
        gap: 20px;
    }

    .new-post-button {
        width: 100%;
    }
}

.main-content-container {
    width: min(900px, 60%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
}

.posts-container {
    background: #f2e9ea;
    background: linear-gradient(90deg, rgba(242, 233, 234, 1) 0%, rgba(232, 215, 211, 1) 53%, rgba(224, 211, 204, 1) 100%);
    max-width: 100%;
    overflow: hidden;
}
</style>
<template>
    <div class="lonely-container">
        <div>{{ isFolder ? "📁" : "📄" }} <span class="name"> {{ component.name }} </span></div>

        <button @click="deleteComponent" class="delete-button">✘</button>
        <button @click="renameComponent" class="edit-button">✎</button>

        <template v-if="isFolder">
            <RecursiveTree v-for="child in (component as FolderType).items" :key="component.name" :component="child">

            </RecursiveTree>
        </template>

        <template v-else>

        </template>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { FolderType, ItemType } from './Folder.vue';

const props = defineProps<{
    component: ItemType
}>();

const component = props.component;

const isFolder = computed(() => {
    return isFolderType(component);
})

const isFolderType = (obj: ItemType) => {
    return 'items' in obj;
}

const deleteComponent = () => {
    console.log('trying to delete' + component.name);
}

const renameComponent = () => {
    component.name = "default";
}

</script>

<style lang="scss">
.lonely-container {
    position: relative;
    margin-top: 20px;

    .name {
        text-decoration: underline;
    }

    .edit-button {
        position: absolute;
        right: 10%;
        top: 0;
        background-color: rgb(121, 164, 202);

    }

    .delete-button {
        position: absolute;
        right: 2%;
        top: 0;
        background-color: rgb(121, 164, 202);
    }
}
</style>
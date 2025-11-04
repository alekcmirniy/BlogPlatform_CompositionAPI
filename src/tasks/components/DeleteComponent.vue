<template>
    <button @click="deleteComponent" class="delete-button">✘</button>
</template>

<script setup lang="ts">
import type { FolderType, ItemType } from '@/tasks/utils/types';

const props = defineProps<{
    component: ItemType
}>();

let component = props.component;

const deleteComponent = () => {
    if (!component.parentFolder) throw new Error("YOU CANNOT REMOVE ROOT FOLDER");
    component.parentFolder.items = component.parentFolder.items.filter((item) => (item !== component));

    component.parentFolder = null;
    component.name = '';
    if ('items' in component) {
        (component as FolderType).items.length = 0;
    }
}

</script>

<style lang="scss" scoped>
@use '../../styles/mixins' as mixins;

.delete-button {
    @include mixins.operate-button();
    right: 2%;
}
</style>
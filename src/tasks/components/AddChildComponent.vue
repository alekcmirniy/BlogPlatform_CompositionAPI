<template>
    <button @click="startAddingChild" class="new-child-button">+</button>
    <div v-if="isAddingChild">Что создаем?
        <form ref="addingFormElement">
            <input @change="stopAddingChild" name="addChild" ref="fileRadio" type="radio" v-model="newChild" id="file"
                value="file" />
            <label for="file">File</label>

            <br />

            <input @change="stopAddingChild" name="addChild" type="radio" v-model="newChild" id="folder"
                value="folder" />
            <label for="folder">Folder</label>
        </form>
    </div>
</template>

<script setup lang="ts">
import { nextTick, ref } from 'vue';
import type { FolderType, ItemType } from '@/tasks/utils/types';

const props = defineProps<{
    component: ItemType
}>();

const component = props.component;

const startAddingChild = () => {
    if (isAddingChild.value) {
        nextTick(() => isAddingChild.value = false);
        return;
    }
    if (!(component as FolderType).items) throw new Error("YOU CANNOT ADD CHILDREN FOR A FILETYPE");
    isAddingChild.value = true;
}

const isAddingChild = ref(false);
const newChild = ref(null);
const addingFormElement = ref<HTMLFormElement | null>(null);
const fileRadio = ref<HTMLInputElement | null>(null);

const stopAddingChild = () => {
    if (newChild.value) {
        let newComponent: ItemType = { name: 'newFile', parentFolder: (component as FolderType) };
        if (newChild.value === "folder") {
            newComponent = {
                name: 'newFolder',
                items: [],
                parentFolder: (component as FolderType),
                fileIconColor: 'white',
            };
        }
        (component as FolderType).items.push(newComponent);
        newChild.value = null;
    }
    isAddingChild.value = false;
}

</script>

<style lang="scss" scoped>
@use '../../styles/mixins' as mixins;

.new-child-button {
    @include mixins.operate-button();
    right: 18%;
}
</style>
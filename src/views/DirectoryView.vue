<template>
    <div class="container">
        <RecursiveTree :component="rootFolder">
            <template #default="{ component, fileIconColor }">
                📄 {{ component.name }} {{ fileIconColor ?? "white" }}
            </template>

            <template #delete="{ component }">
                <DeleteComponent :component="component" />
            </template>

            <template #edit="{ component }">
                <RenameComponent :component="component" />
            </template>
        </RecursiveTree>
    </div>
</template>

<script lang="ts" setup>
import RecursiveTree from '@/tasks/RecursiveTree.vue'
import DeleteComponent from '@/tasks/components/DeleteComponent.vue'
import RenameComponent from '@/tasks/components/RenameComponent.vue'

import type { FolderType } from '@/tasks/utils/types';
import type { FileType } from '@/tasks/utils/types';
import { reactive } from 'vue'

const rootFolder = reactive<FolderType>({
    name: 'ROOT',
    items: [],
    parentFolder: null,
    fileIconColor: 'white',
});

const folder1: FolderType = {
    name: 'folder1',
    items: [],
    parentFolder: rootFolder,
    fileIconColor: 'yellow',
};

const folder2: FolderType = {
    name: 'folder2',
    items: [],
    parentFolder: rootFolder,
    fileIconColor: 'brown',
};

const folder11: FolderType = {
    name: 'folder11',
    items: [],
    parentFolder: folder1,
    fileIconColor: 'green',
};

const folder21: FolderType = {
    name: 'folder21',
    items: [],
    parentFolder: folder2,
    fileIconColor: 'pink',
};

const file1: FileType = { name: 'file1', parentFolder: rootFolder };
const file22: FileType = { name: 'file22', parentFolder: folder2 };
const file111: FileType = { name: 'file111', parentFolder: folder11 };

folder11.items.push(file111);
folder1.items.push(folder11);
folder2.items.push(folder21);
folder2.items.push(file22);

rootFolder.items.push(folder1, folder2, file1);

</script>

<style lang="scss" scoped>
.container {
    width: 600px;
    height: fit-content;
    border: solid 2px black;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
</style>
<template>
    <div class="container">
        <RecursiveTree :component="rootFolder" />
    </div>
</template>

<script lang="ts" setup>
import DirectoryTree from '@/tasks/DirectoryTree.vue';
import type { FolderType as FolderType, ItemType } from '@/tasks/Folder.vue';
import type { FileType as FileType } from '@/tasks/File.vue';
import Folder from '@/tasks/Folder.vue';
import { File as FileClass, root } from '@/tasks/DirectoryClasses'
import { computed, reactive } from 'vue';
import File from '@/tasks/File.vue';
import RecursiveTree from '@/tasks/RecursiveTree.vue';

const files = computed(() => {
    return rootFolder.items.filter((rootFile: ItemType) => rootFile instanceof FileClass);
})

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
folder21.items.push(file22);
folder2.items.push(folder21);

rootFolder.items.push(folder1, folder2, file1);

</script>

<style lang="scss" scoped>
.container {
    width: 600px;
    height: 600px;
    border: solid 2px black;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
</style>
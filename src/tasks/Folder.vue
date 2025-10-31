<template>
    📁 <span>{{ folder.name }}</span>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import type { FileType } from './File.vue';
import { useOperateItem } from './useOperateItem';

export type ItemType = FileType | FolderType;
export type FolderType = {
    name: string,
    parentFolder: FolderType | null,
    items: ItemType[],
    fileIconColor: string
}

const folderParams = reactive<FolderType>({
    name: "default",
    parentFolder: null,
    items: [],
    fileIconColor: "white"
})

const addChild = (child: ItemType) => {
    folderParams.items.push(child);
}

const { rename, remove } = useOperateItem(folderParams);

const props = defineProps<{
    folder: FolderType;
}>()

</script>

<style lang="scss" scoped></style>
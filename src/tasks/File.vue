<template>
    📄 <span>{{ file.name }}</span>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import type { FolderType } from './Folder.vue';
import { useOperateItem } from './useOperateItem';

export type FileType = {
    name: string,
    parentFolder: FolderType | null
}

const fileParams = reactive<FileType>({
    name: "default",
    parentFolder: null
})

const getIconColor = () => {
    return fileParams.parentFolder?.fileIconColor ?? 'white';
}

const { rename, remove } = useOperateItem(fileParams);

const props = defineProps<{
    file: FileType;
}>();
</script>

<style lang="scss" scoped></style>
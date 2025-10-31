<template>
    <div class="directory">
        <slot name="item" :item="folder"></slot>
        <div class="children" v-if="folder.items.length">
            <template v-for="child in folder.items" :key="child.name">
                <DirectoryTree v-if="'items' in child" :folder="child">
                    <template #item="child">
                        <DirectoryTree :folder="child" />
                    </template>
                </DirectoryTree>
                <template v-else>
                    <slot name="child" :item="child"></slot>
                </template>
            </template>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { FolderType, ItemType } from './Folder.vue';

const props = defineProps<{
    folder: FolderType
}>();

defineSlots<{
    item: ItemType,
    child: ItemType
}>();

</script>

<style lang="scss"></style>
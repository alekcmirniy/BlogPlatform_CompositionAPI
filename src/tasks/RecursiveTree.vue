<template>
    <div class="lonely-container">

        <div v-if="isFolder">
            📁<span class="name">{{ component.name }}</span>

            <DeleteComponent :component="component" />
            <RenameComponent :component="component" />
            <AddChildComponent :component="component" />

            <RecursiveTree v-for="child in (component as FolderType).items" :key="child.name" :component="child">
                <template #default="slotProps">
                    <slot name="default" v-bind="slotProps"></slot>
                </template>

                <template #edit="slotProps">
                    <slot name="edit" v-bind="slotProps"></slot>
                </template>

                <template #delete="slotProps">
                    <slot name="delete" v-bind="slotProps"></slot>
                </template>
            </RecursiveTree>
        </div>

        <div v-else>
            <slot :component="component" :isFolder="false" :fileIconColor="component.parentFolder?.fileIconColor">
            </slot>
            <slot name="edit" :component="component" :isFolder="false"
                :fileIconColor="component.parentFolder?.fileIconColor">
            </slot>
            <slot name="delete" :component="component" :isFolder="false"
                :fileIconColor="component.parentFolder?.fileIconColor">
            </slot>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import DeleteComponent from './components/DeleteComponent.vue'
import RenameComponent from './components/RenameComponent.vue';
import AddChildComponent from './components/AddChildComponent.vue';
import type { FolderType, ItemType } from '@/tasks/utils/types';

const props = defineProps<{
    component: ItemType
}>();

defineSlots<{
    default?: (props: {
        component: ItemType,
        isFolder: boolean,
        fileIconColor: string | undefined
    }) => any,
    edit?: (props: {
        component: ItemType,
        isFolder: boolean,
        fileIconColor: string | undefined
    }) => any,
    delete?: (props: {
        component: ItemType,
        isFolder: boolean,
        fileIconColor: string | undefined
    }) => any,
}>();

const component = props.component;

const isFolder = computed(() => {
    return isFolderType(component);
})

const isFolderType = (obj: ItemType) => {
    return 'items' in obj;
}

</script>

<style lang="scss">
.lonely-container {
    position: relative;
    margin-top: 20px;

    .name {
        text-decoration: underline;
    }
}
</style>
<template>
    <button @click="startRenamingComponent" class="rename-button">✎</button>
    <p v-if="isRenaming">Введите новое имя:<input @blur="stopRenamingComponent" class="renaming-input" type="text"
            ref="newNameElement" v-model="newName" />
    </p>
</template>

<script setup lang="ts">
import { nextTick, ref } from 'vue';
import type { ItemType } from '@/tasks/utils/types';

const props = defineProps<{
    component: ItemType
}>();

const component = props.component;

const startRenamingComponent = () => {
    isRenaming.value = true;
    nextTick(() => {
        if (newNameElement.value) {
            newNameElement.value.focus();
        }
    })
}

const stopRenamingComponent = () => {
    setTimeout(() => {
        if (newName.value.trim())
            component.name = newName.value;
        isRenaming.value = false;
        newName.value = "";
    }, 100);
}

const isRenaming = ref(false);
const newNameElement = ref<HTMLInputElement | null>(null);
const newName = ref("");

</script>

<style lang="scss" scoped>
@use '../../styles/mixins' as mixins;

.rename-button {
    @include mixins.operate-button();
    right: 10%;
}
</style>
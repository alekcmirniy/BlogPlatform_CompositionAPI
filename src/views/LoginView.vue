<script setup lang="ts">
import { useHashString } from '@/composables/useHashString';
import { computed, reactive, ref, watch, type Ref } from 'vue';

    const isPswFilled: Ref<boolean> = ref(false);
    
    const formData = reactive({
        login: "",
        encryptedPsw: "",
        token: ""
    })

    watch(isPswFilled, ((newValue, oldValue) => {
        formData.encryptedPsw = newValue.toString();
    }))

    const handlePasswordFieldChanges = (event: Event) => {
        isPswFilled.value = ((event.target as HTMLInputElement).value) ? true : false;
        return;
    }

    const isRegisterDisabled = computed(() => {
        const fd = formData;
        return !(fd.login.length >= 5 && fd.encryptedPsw.length && fd.token.length >= 3) || false;
    })

    const handleRegister = (event: MouseEvent) => {
        event.preventDefault();
        try {
            if (!formData.token.length) throw new Error ("Token field is empty");
            localStorage.setItem("token", formData.token);
        }
        catch (e: any) {
            console.error(e.message);
        }
        finally {
            console.log("Register process finished.");
        }
    }
</script>

<template>
    <div class="container">
        <form class="form-wrapper">
            <input v-model="formData.login" type="text" placeholder="Enter login..." required/>
            <input @change="handlePasswordFieldChanges" type="password" placeholder="Enter password..." required/>
            <input v-model="formData.token" type="text" placeholder="Enter token..." required/>
            <button @click="handleRegister" :disabled="isRegisterDisabled" type="submit" class="default-button">Register</button>
        </form>
    </div>
</template>

<style lang="scss" scoped>
.container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: min(600px, 75%);
}
.form-wrapper {
    display: flex;
    flex-direction: column;
    gap: 40px;
    align-items: center;

    input {    
        border-radius: 10px;
        height: 40px;
        padding: 0 10px;
        font-size: 1.5em;
    }
    
}
</style>
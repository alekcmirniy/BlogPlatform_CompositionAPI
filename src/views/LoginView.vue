<template>
    <div class="container">
        <form class="form-wrapper">
            <input v-model="formData.login" type="text" placeholder="Enter login..." required/>
            <input v-model="formData.password" type="password" placeholder="Enter password..." required/>
            <input v-model="formData.token" type="text" placeholder="Enter token..." required/>
            <button @click="handleRegister" :disabled="isRegisterDisabled" type="submit" class="default-button">Register</button>
        </form>
    </div>
</template>

<script setup lang="ts">
    import { computed, reactive } from 'vue';

    const formData = reactive({
        login: "",
        password: "",
        token: ""
    })

    const isRegisterDisabled = computed(() => {
        const fd = formData;
        return (fd.login.length < 5 || fd.password.length < 8 || fd.token.length < 3);
    })

    const handleRegister = (event: MouseEvent) => {
        event.preventDefault();
        try {
            if (formData.token.length) throw new SyntaxError('Техническая ошибка');
            localStorage.setItem("isAuthorized", "true");
        }
        finally {
            console.log("Register process finished.");
        }
    }
</script>

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
        box-shadow: 4px 4px 10px rgb(34, 30, 30);
    }
    
}
</style>
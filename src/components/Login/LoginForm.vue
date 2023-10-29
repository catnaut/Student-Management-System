<script setup lang="ts">
import { ref } from 'vue'
import LoginTab from './LoginTab.vue';
import LoginNotice from './LoginNotice.vue';

const email = ref('')
const password = ref('')
const isError = ref(false)

function login() {
    isError.value = true
}

</script>

<template>
    <div class="max-w-md w-full p-6 bg-white rounded-md shadow-md">
        <h2 class="text-2xl font-semibold text-center p-2">Login</h2>
        <LoginNotice level="info">Please login with your account</LoginNotice>
        <LoginTab class=" justify-center p-2" />
        <span class="divider"> </span>
        <div v-if="isError" class="text-red-500 backgroud">
            <span>用户名或密码错误</span>
        </div>
        <form @submit.prevent="login" class="mt-6">
            <div>
                <label for="email" class="block text-gray-700 p-2">邮箱地址</label>
                <!-- <input v-model="email" type="email" id="email"
                    class="mt-1 block w-full py-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    required> -->
                <input id="email" v-model="email" type="email" placeholder="114514" :class="{ 'input-error': isError }"
                    class="input  w-full">
            </div>
            <div class="mt-4">
                <label for="password" class="block text-gray-700 p-2">密码</label>
                <input v-model="password" type="password" placeholder="passwd" id="password" class="input  w-full" required>
            </div>
            <div class="mt-6">
                <button type="submit" @click="login" class="btn w-full">登录</button>
            </div>
        </form>
    </div>
</template>

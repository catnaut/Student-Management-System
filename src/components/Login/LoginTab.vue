<script setup lang="ts">
import { ref } from 'vue'

// Todo: 身份登录
const loginType = ref('')



</script>

<template>
  <div>
    <select class="select select-sm w-full">
      <option disabled selected>Login as</option>
      <option selected>Student</option>
      <option>Teacher</option>
      <option>Admin</option>
    </select>
  </div>
</template>

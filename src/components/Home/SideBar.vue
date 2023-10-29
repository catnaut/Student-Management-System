<script setup lang="ts">
import { reactive } from 'vue'
const sidebarList = reactive([
  {
    title: '主页',
    link: '/'
  },
  {
    title: 'dashboard',
    link: 'dashboard'
  },
  {
    title: '外出登记',
    link: 'outgoing'
  }
])
</script>

<template>
  <ul class="menu menu-md p-4 w-60 min-h-full bg-base-200 text-base-content">
    <li v-for="item in sidebarList" :key="item.title">
      <RouterLink :to="item.link" class="btn btn-ghost btn-block p-3">
        {{ item.title }}
      </RouterLink>
    </li>
  </ul>
</template>

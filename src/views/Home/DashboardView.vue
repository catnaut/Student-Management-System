<script setup lang="ts">

import { reactive } from 'vue';

const list = reactive([
    {
      id: 1,
      title: '新生入学',
      content: '新生入学指南',
      buttonText: '查看详情',
      buttonFunc: ()=>{console.log('新生入学')},
    },
    {
      id: 2,
      title: '学生管理',
      content: '学生管理指南',
      buttonText: '查看详情',
      buttonFunc: ()=>{console.log('学生管理')},
    }
  ]
);

</script>

<template>
  <!-- <div class="grid place-content-center">
    <span class="loading loading-spinner loading-xl"></span>
  </div> -->
  <div class="flex flex-col justify-center py-20 px-8 items-center">
    <div v-for="card in list" :key="card.id" class="py-6">
      <div class="card w-72 lg:w-96  bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="card-title">{{ card.title }}</h2>
          <p>{{ card.content }}</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary" @click="card.buttonFunc">{{ card.buttonText }}</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
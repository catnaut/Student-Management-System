<script setup lang="ts">
import { ref, reactive } from 'vue';

const theadList = reactive([
  '审核状态',
  '请假时间',
  '前往地区',
  '申请时间',
  '学院审核时间',
  '操作'
])

const itemList = reactive([
  {
    id: 1,
    status: '未通过',
    time: '2021-6-2 12:00',
    location: '南京',
    applyTime: '2021-6-2 12:00',
    collegeTime: '2021-6-2 12:00'
  },
  {
    id: 2,
    status: '审核通过',
    time: '2021-6-2 12:00',
    location: '南京',
    applyTime: '2021-6-2 12:00',
    collegeTime: '2021-6-2 12:00'
  },
  {
    id: 3,
    status: '审核中',
    time: '2021-6-2 12:00',
    location: '南京',
    applyTime: '2021-6-2 12:00',
    collegeTime: '2021-6-2 12:00'
  },
  {
    id: 4,
    status: '审核中',
    time: '2021-6-2 12:00',
    location: '南京',
    applyTime: '2021-6-2 12:00',
    collegeTime: '2021-6-2 12:00'
  },
  {
    id: 5,
    status: '审核中',
    time: '2021-6-2 12:00',
    location: '南京',
    applyTime: '2021-6-2 12:00',
    collegeTime: '2021-6-2 12:00'
  },
  {
    id: 6,
    status: '审核中',
    time: '2021-6-2 12:00',
    location: '南京',
    applyTime: '2021-6-2 12:00',
    collegeTime: '2021-6-2 12:00'
  },
  {
    id: 7,
    status: '审核中',
    time: '2021-6-2 12:00',
    location: '南京',
    applyTime: '2021-6-2 12:00',
    collegeTime: '2021-6-2 12:00'
  },
  {
    id: 8,
    status: '审核中',
    time: '2021-6-2 12:00',
    location: '南京',
    applyTime: '2021-6-2 12:00',
    collegeTime: '2021-6-2 12:00'
  },
  {
    id: 9,
    status: '审核中',
    time: '2021-6-2 12:00',
    location: '南京',
    applyTime: '2021-6-2 12:00',
    collegeTime: '2021-6-2 12:00'
  },
]
)


const pageNumber = ref(1)

const isShowItemDialog = ref(false)

function showItemDialog() {
  // console.log('showItemDialog')
  isShowItemDialog.value = true
}




</script>




<template>
  <div class="border-2 border-solid bg-base-200 rounded-md   overflow-x-auto table-fixed">

      <table class="table  to-base-200 min-w-[700px]">
        <!-- head -->
        <thead class="">
          <tr>
            <!-- <th>审核状态</th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th> -->
            <th v-for="item in theadList" :key="item">{{ item }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in itemList" :key="item.id">
            <!-- <td v-for="(value,key) in item" :key="value">
        <span v-if="key!=='id'"> {{ value }} </span>
        </td> -->
            <th v-if="item.status === '审核通过'">
              <span class="badge badge-success">{{ item.status }}</span>
            </th>
            <th v-else-if="item.status === '未通过'">
              <span class="badge badge-error">{{ item.status }}</span>
            </th>
            <th v-else>
              <span class="badge badge-warning">{{ item.status }}</span>
            </th>

            <th>
              {{ item.time }}
            </th>
            <th>
              {{ item.location }}
            </th>

            <th>
              {{ item.applyTime }}
            </th>

            <th>
              {{ item.collegeTime }}
            </th>

            <th>
              <button class="btn btn-sm btn-primary text-xs" @click="showItemDialog">
                查看详情
              </button>
            </th>

          </tr>
        </tbody>

      </table>


  </div>
  <!-- The button to open modal -->
  <div class="w-full py-8">
    <button class="float-right">
      <label for="my_modal_7" class="btn btn-accent ">添加</label>
    </button>
    <div class=" float-left join">
      <button class="join-item btn">«</button>
      <button class="join-item btn">Page {{ pageNumber }}</button>
      <button class="join-item btn">»</button>
    </div>
  </div>



  <!-- Put this part before </body> tag -->
  <input id="my_modal_7" type="checkbox" v-model="isShowItemDialog" class="modal-toggle" />
  <div class="modal">
    <div class="modal-box">
      <!-- <h3 class="text-lg font-bold">Hello!</h3>
    <p class="py-4">This modal works with a hidden checkbox!</p> -->

      <label class="label">请假类型</label>
      <select class="select select-bordered w-full max-w-xs">
        <option disabled selected>请选择</option>
        <option>个人原因</option>
        <option>其他</option>
      </select>

      <label class="label">申请理由</label>
      <textarea class="textarea textarea-bordered textarea-lg w-full " type="text" placeholder="text" />

      <label class="label">外出地点</label>
      <input class="input input-bordered" type="text" placeholder="text" />

      <label class="label">离校时间</label>
      <input class="input input-bordered" type="week" placeholder="week" />
    </div>
    <label class="modal-backdrop" for="my_modal_7">Close</label>
  </div>
</template>

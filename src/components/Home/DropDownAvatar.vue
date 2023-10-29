<template>
  <div class="dropdown dropdown-end">
    <label tabindex="0" class="btn btn-ghost btn-circle avatar base-300">
      <!-- 头像 -->
      <!-- Todo: 头像似乎没对齐 -->
      <div class="avatar">
        <div class="rounded-ful">
          <div class="icon-[mdi-light--account] text-3xl"></div>
        </div>
      </div>
    </label>
    <ul tabindex="0" class="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
      <li>
        <a class="justify-between">
          Profile
          <span class="badge">New</span>
        </a>
      </li>
      <li><a>Settings</a></li>
      <li><a>Logout</a></li>
    </ul>
  </div>
</template>
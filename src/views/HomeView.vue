<script setup lang="ts">
import SideBar from '@/components/Home/SideBar.vue'
import DropDownAvatar from '@/components/Home/DropDownAvatar.vue'
</script>

<template>
  <div>
    <div class="drawer lg:drawer-open">
      <input id="root-drawer" type="checkbox" class="drawer-toggle" />

      <!-- page context -->
      <div class="drawer-content flex flex-col h-screen overflow-hidden">
        <!-- nav-bar -->
        <div class="navbar bg-base-100 w-full">
          <!-- menu-toggle -->
          <!-- Todo: swap -->
          <div class="flex-1 lg:invisible">
            <label for="root-drawer" class="btn btn-ghost btn-square flex-none drawer-button">
              <div class="icon-[mdi-light--menu] text-3xl"></div>
            </label>
          </div>

          <div class="flex-none gap-2">
            <DropDownAvatar />
          </div>
        </div>
        <!-- main -->
        <main class="bg-blue-100 h-full overflow-hidden">
          <RouterView  />
        </main>
      </div>

      <div class="drawer-side">
        <label for="root-drawer" aria-label="close sidebar" class="drawer-overlay"></label>
        <SideBar />
      </div>
    </div>
  </div>
</template>

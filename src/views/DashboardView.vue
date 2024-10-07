<script setup lang="ts">
import type { VNode } from 'vue'

interface Props {
  children: VNode
}

defineProps<Props>()
</script>

<template>
  <div id="Dashboard">
    <main class="relative">
      Navbar
      <div class="flex">
        Sidebar
        <section class="flex min-h-screen flex-1 flex-col px-6 pb-6 pt-28 max-md:pb-14 sm:px-14">
          <div class="w-full">
            {{ children }}
          </div>
        </section>
      </div>
    </main>
  </div>
</template>
<style></style>

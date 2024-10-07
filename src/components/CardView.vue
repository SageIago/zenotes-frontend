<script setup lang="ts">
interface Props {
  id: string
  title: string
  description: string
  icon?: string
}

defineProps<Props>()
</script>

<template>
  <div
    class="card px-[30px] py-[20px] bg-secondary rounded-lg w-[300px] h-[200px] flex justify-between items-center"
    :key="id"
  >
    <div class="text-center">
      <h1 class="font-semibold font-sans leading-[30.8px] text-[18px]">{{ title }}</h1>
      <p class="leading-[22.8px] text-[16px] font-sans">{{ description }}</p>
    </div>
  </div>
</template>
<style scoped>
.card {
  transition: translate ease-in-out 100ms box-shadow ease-in-out 100ms;
}

.card:hover,
.card:focus {
  translate: 0 -5px;
  box-shadow: 0px 5px 8px rgba(0, 0, 0, 0.2);
}
</style>

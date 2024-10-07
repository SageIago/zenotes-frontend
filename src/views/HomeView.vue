<script setup lang="ts">
import { Menu, RocketLaunch } from '@/assets'
import { Features } from '@/constants'
import { ref } from 'vue'
import CardView from '../components/CardView.vue'

const styles = 'flex justify-between items-center'
const toggler = ref(false)

const handleToggle = () => {
  toggler.value = !toggler.value
}
</script>

<template>
  <body class="min-h-screen">
    <!-- NAVBAR -->
    <header :class="` max-w-screen-xl flex-wrap` + { styles } + `px-0 py-6 sm:px-5`">
      <nav :class="`${styles} px-3`">
        <h3 class="font-bold font-fontMono text-[28px] leading-[15px]">ZENOTES</h3>

        <ul :class="`${styles}`">
          <li class="mr-6">FAQ</li>
          <button
            class="card_button text-center justify-center flex items-center hover:bg-purple-600"
          >
            <img :src="RocketLaunch" alt="RocketLaunch" class="mr-[5px]" />
            Get Started
          </button>
        </ul>
      </nav>
    </header>

    <main>
      <!-- HEADER CONTENT -->
      <section class="flex flex-col items-center mt-8" id="section-content">
        <div class="text-center m-5">
          <h1 class="font-bold font-fontMono text-5xl">Welcome to Zenotes</h1>
          <p class="text-[22px] font-sans leading-[30.2px] m-3">The Ultimate Classroom Companion</p>
          <button
            class="card_button text-center mx-[10px] my-[20px] inline-flex items-center hover:bg-purple-600 focus:ring-4"
          >
            <img :src="`${RocketLaunch}`" alt="" class="" />
            Get Started
          </button>
        </div>
      </section>
      <!-- FEATURES CONTENT -->
      <section class="flex justify-center items-center max-md:flex-col gap-[20px]">
        <div
          v-for="(feature, index) in Features"
          :key="index"
          class="flex justify-around flex-row items-center max-md:mb-3"
        >
          <CardView
            :description="feature.description"
            :icon="feature.icons"
            :title="feature.title"
            :id="feature.title + index"
          />
        </div>
      </section>

      <p class="text-center mt-10">All Rights Reserved. 2024 Zenotes.</p>
    </main>
  </body>
</template>

<style scoped></style>

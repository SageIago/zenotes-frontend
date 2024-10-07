---

# Zenotes Frontend

This is the frontend UI configuration of the Zenotes Project done by Abdiel Wilson and the rest of Team Zenote.

## Tailwind Configuration

This project utilizes a custom [`tailwind.config.js`](./tailwind.config.js) file to manage Tailwind CSS configurations. This configuration file defines custom themes, colors, spacing, and responsive breakpoints used throughout the project.

### Copying the Tailwind Configuration

```javascript
// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#2B2B2B",
        "secondary": "#3B3B3B",
        "primary-100": "#A259FF",
        "primary-200": "",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        fontMono: ["Space Mono", "mono-space"]
      },
      screens: {
        xs: "480px",
        ss: "620px",
        sm: "768px",
        md: "1060px",
        lg: "1200px",
        xl: "1700px",
      }
    },
  },
  plugins: [],
};
```

### Landing Page Styling

For the Landing Page styling, please refer to the `HomeView` component in the `Views` folder. Here’s a snippet of the code:

```html
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
    <header :class="`max-w-screen-xl flex-wrap ${styles} px-0 py-6 sm:px-5`">
      <nav :class="`${styles} px-3`">
        <h3 class="font-bold font-fontMono text-[28px] leading-[15px]">ZENOTES</h3>
        <ul :class="styles">
          <li class="mr-6">FAQ</li>
          <button class="card_button text-center flex items-center hover:bg-purple-600">
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
          <button class="card_button inline-flex items-center hover:bg-purple-600 focus:ring-4">
            <img :src="RocketLaunch" alt="" />
            Get Started
          </button>
        </div>
      </section>

      <!-- FEATURES CONTENT -->
      <section class="flex justify-center items-center max-md:flex-col gap-[20px]">
        <div v-for="(feature, index) in Features" :key="index" class="flex items-center max-md:mb-3">
          <CardView :description="feature.description" :icon="feature.icons" :title="feature.title" :id="feature.title + index" />
        </div>
      </section>

      <p class="text-center mt-10">All Rights Reserved. 2024 Zenotes.</p>
    </main>
  </body>
</template>

<style scoped></style>
```

For more information on the `CardView` component, refer to [`./components/CardView.vue`](./components/CardView.vue).

The `./tailwind.config.js` link will work as long as the `README.md` and `tailwind.config.js` file are in the same directory.

---

This version improves readability and removes any redundant or misplaced punctuation. Let me know if there are any additional tweaks you’d like!

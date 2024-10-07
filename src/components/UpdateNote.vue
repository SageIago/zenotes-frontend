<template>
  <section class="bg-primary">
    <div class="py-8 px-4 mx-auto max-w-2xl lg:py-16">
      <h2 class="mb-4 text-xl font-bold text-gray-900 dark:text-white">Create a New Note</h2>
      <form action="#">
        <div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <div class="sm:col-span-2">
            <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Note Title</label
            >
            <input
              type="text"
              name="name"
              id="name"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-primary dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Please Enter Note Title"
              required
            />
          </div>
          <div class="w-full">
            <label
              for="lectures"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Lectures</label
            >
            <input
              type="text"
              name="Lectures"
              id="Lectures"
              class="bg-primary border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Please Input Lecture Title"
              required
            />
          </div>
          <div>
            <label
              for="category"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Category</label
            >
            <select
              id="category"
              class="bg-primary border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            >
              <option>Select category</option>
            </select>
          </div>

          <div class="sm:col-span-2">
            <label
              for="description"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Description</label
            >
            <textarea
              id="description"
              rows="10"
              class="block p-2.5 w-full text-sm text-gray-900 bg-primary rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Your description here"
            ></textarea>
          </div>
        </div>
        <button
          type="submit"
          class="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-100 rounded-lg focus:ring-4 focus:ring-offset-primary-100 dark:focus:ring-offset-primary-100 hover:bg-purple-800 mr-3"
        >
          Update Note
        </button>
        <button
          type="submit"
          class="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-purple-500 rounded-lg focus:ring-4 focus:ring-offset-primary-100 dark:focus:ring-offset-primary-100 hover:bg-red-400"
        >
          Back
        </button>
      </form>
    </div>
  </section>
</template>

<script setup lang="ts"></script>
<style></style>

<script setup></script>
<template>
  <div class="px-6 py-8 h-screen">
    <div class="justify-center items-center flex mt-20">
      <div
        class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-secondary dark:border-gray-700"
      >
        <form class="space-y-6" action="#">
          <h5 class="text-xl font-medium text-white text-center">WELCOME TO ZENOTES</h5>
          <div>
            <label for="text" class="block mb-2 text-sm font-medium text-white">Your Name</label>
            <input
              type="name"
              name="name"
              id="User"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-purple-500 block w-full p-2.5 dark:placeholder-gray-400"
              placeholder="Enter Your Name"
              required
            />
          </div>
          <!-- LABEL FOR EMAIL -->
          <div>
            <label for="email" class="block mb-2 text-sm font-medium text-white">Your Email</label>
            <input
              type="email"
              name="email"
              id="email"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-purple-500 block w-full p-2.5 dark:placeholder-gray-400"
              placeholder="student-name@gmail.com"
              required
            />
          </div>

          <div>
            <label for="password" class="block mb-2 text-sm font-medium text-white"
              >Your password</label
            >
            <input
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              class="bg-gray-50 border border-gray-300 text-secondary text-sm rounded-lg focus:ring-purple-800 focus:border-purple-500 block w-full p-2.5 dark:placeholder-gray-400"
              required
            />
          </div>

          <button
            type="submit"
            class="w-full text-white bg-primary-100 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-purple-800 dark:hover:bg-purple-800 dark:focus:ring-purple-800"
          >
            Create Account
          </button>
          <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
            Not registered?
            <a href="#" class="text-primary-100 hover:underline dark:text-purple-500"
              >Sign in Here!</a
            >
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style></style>

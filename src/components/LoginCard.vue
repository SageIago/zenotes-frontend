<template>
  <div class="px-6 py-8 h-screen">
    <div class="justify-center items-center flex mt-20">
      <div
        class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-secondary dark:border-gray-700"
      >
        <form class="space-y-6" action="#">
          <h5 class="text-xl font-medium text-white text-center">LOGIN YOUR ACCOUNT</h5>
          <div>
            <label for="email" class="block mb-2 text-sm font-medium text-white">Your email</label>
            <input
              type="email"
              name="email"
              id="email"
              class="bg-primary border border-none text-white text-sm rounded-lg focus:ring-blue-500 focus:border-purple-500 block w-full p-2.5 dark:placeholder-gray-400"
              placeholder="student-name@email.com"
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
              class="bg-primary border border-none text-white text-sm rounded-lg focus:ring-purple-800 focus:border-purple-500 block w-full p-2.5 dark:placeholder-gray-400"
              required
            />
          </div>
          <div class="flex items-start">
            <div class="flex items-start">
              <div class="flex items-center h-5">
                <input
                  id="remember"
                  type="checkbox"
                  value=""
                  class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                  required
                />
              </div>
              <label for="remember" class="ms-2 text-sm font-medium text-white dark:text-gray-300"
                >Remember me</label
              >
            </div>
            <a href="#" class="ms-auto text-sm text-blue-700 hover:underline dark:text-blue-500"
              >Lost Password?</a
            >
          </div>
          <button
            type="submit"
            class="w-full text-white bg-primary-100 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-purple-800 dark:hover:bg-purple-800 dark:focus:ring-purple-800"
          >
            Login to your account
          </button>
          <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
            Not registered?
            <a href="#" class="text-primary-100 hover:underline dark:text-purple-500"
              >Create account</a
            >
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
<style></style>

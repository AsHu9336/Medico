import React from "react";

export default function Login() {
  return (
    <>
      <main class="container mx-auto p-4 mt-12 bg-white flex flex-col items-center justify-center text-gray-700">
        <div class="w-10/12 sm:w-8/12 md:w-6/12 lg:w-5/12 xl:w-4/12 mb-4">
          <h1 class="text-4xl font-semibold">Welcome back.</h1>
        </div>
        <div class="w-10/12 sm:w-8/12 md:w-6/12 lg:w-5/12 xl:w-4/12 mb-6">
          <input
            class="mb-4 p-2 appearance-none block w-full bg-gray-200 placeholder-gray-900 rounded border focus:border-teal-500"
            type="text"
            placeholder="Email"
          />
          <input
            class="mb-4 p-2 appearance-none block w-full bg-gray-200 placeholder-gray-900 rounded border focus:border-teal-500"
            type="text"
            placeholder="Password"
          />
          <a href="#"
					class="text-xs text-indigo-500 hover:text-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Create
					Account</a>
          <div class="flex items-center">
            <div class="w-1/2 flex items-center">
              <input id="remember-me" type="checkbox" class="mt-1 mr-2" />
              <label for="remember-me">Remember me!</label>
            </div>
            <button
              class="ml-auto w-1/2 bg-gray-800 text-white p-2 rounded font-semibold hover:bg-gray-900"
              type="submit"
            >
              Log In
            </button>
          </div>
        </div>
      </main>
    </>
  );
}

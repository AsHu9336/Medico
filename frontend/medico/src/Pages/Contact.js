import React from "react";

export default function Contact() {
  return (
    <>
      <div class="bg-gray-100">
        <div class="container mx-auto py-12 ">
          <div class="max-w-lg mx-auto px-4 max-w-screen-lg">
            <h2 class="text-3xl font-semibold text-gray-900 mb-4">
              Contact Us
            </h2>
            <p class="text-gray-700 mb-8">
              How can we help you out!!
            </p>
            <form class="bg-white rounded-lg px-6 py-8 shadow-md">
              <div class="mb-4">
                <label class="block text-gray-700 font-bold mb-2" for="name">
                  Name
                </label>
                <input
                  class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                />
              </div>
              <div class="mb-4">
                <label class="block text-gray-700 font-bold mb-2" for="email">
                  Email
                </label>
                <input
                  class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                />
              </div>
              <div class="mb-4">
                <label class="block text-gray-700 font-bold mb-2" for="message">
                  Message
                </label>
                <textarea
                  class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="message"
                  rows="6"
                  placeholder="Enter your message"
                ></textarea>
              </div>
              <div class="flex justify-end">
                <button
                  class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

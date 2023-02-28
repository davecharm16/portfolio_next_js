import React from 'react'

export const Search = () => {
  return (
      <form class="flex items-center max-w-2xl mx-auto mt-3">
          <label for="voice-search" class="sr-only">Search</label>
          <div class="relative w-full">
              <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
              </div>
              <input type="text" id="voice-search" class="bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-50 border dark:border-gray-300 dark:text-gray-900 text-sm rounded-lg dark:focus:ring-blue-500 dark:focus:border-blue-500 block w-full pl-10 p-2.5  " placeholder="Search Projects, Technologies, Languages" required/>
          </div>
          <button type="submit" class="inline-flex items-center py-2.5 px-3 ml-2 text-sm font-medium text-black bg-[#f6e71d] rounded-lg border border-yellow-500 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-offset-yellow-400 dark:bg-[#f6e71d] dark:hover:bg-yellow-500 dark:focus:bg-yellow-500">
              <svg aria-hidden="true" class="w-5 h-5 mr-2 -ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>Search
          </button>
      </form>
  )
}

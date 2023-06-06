<template>
    <nav id="navbar" class="sticky top-0 z-40 flex w-full flex-row justify-end bg-gray-700 px-4 sm:justify-between">
      <ul class="breadcrumb hidden flex-row items-center py-4 text-lg text-white sm:flex">
        <li class="inline">
          <a href="#">Main</a>
        </li>
        <li class="inline">
          <span>Homepage</span>
        </li>
      </ul>
      <button id="btnSidebarToggler" type="button" class="py-4 text-2xl text-white hover:text-gray-200">
        <svg id="navClosed" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-8 w-8">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
        <svg id="navOpen" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="hidden h-8 w-8">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </nav>
  </template>
  
  <script>
  export default {
    // Component options
  }
  </script>
  
  <style scoped>
  ul.breadcrumb li+li::before {
    content: "\276F";
    padding-left: 8px;
    padding-right: 4px;
    color: inherit;
  }
  
  ul.breadcrumb li span {
    opacity: 60%;
  }
  
  #sidebar {
    -webkit-transition: all 300ms cubic-bezier(0, 0.77, 0.58, 1);
    transition: all 300ms cubic-bezier(0, 0.77, 0.58, 1);
  }
  
  #sidebar.show {
    transform: translateX(0);
  }
  
  #sidebar ul li a.active {
    background: #1f2937;
    background-color: #1f2937;
  }
  </style>
  
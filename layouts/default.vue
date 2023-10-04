<template>
    <div class ="DefaultLayout h-screen text-black text-center bg-black">
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet">

        <slot />
    </div>
</template>

<script setup>

  useHead({
    meta: [
      { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no' }
    ]
  })
</script>
//change background here
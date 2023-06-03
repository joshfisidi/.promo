<script setup lang="ts">
const { $sayHello } = useNuxtApp();
$sayHello("this is the main page also known as index.vue")

</script>
<template>
    <div class="Main flex justify-center items-center"> ??

    </div>
    <Social/>
    <Josh/>
    <Spotify/>
    <AppleMusic/>
    <Github/>
    <ContentDoc />
    <Footer/>
    </template>



///    <img src="@/futurehome.jpg" alt="" />
/// public directly available loads from public
/// <img src="@/assets/futurehome.jpg" alt="" />
/// lets you plug assets into different pages from public folder using nuxt.config.js as a link
<template>
    <div id="particles-js"></div>
  </template>
  
  <script>
  import { onMounted } from 'vue';
  
  export default {
    setup() {
      onMounted(() => {
        particlesJS('particles-js', {
          particles: {
            number: {
              value: 100, // Adjust the number of stars
              density: {
                enable: true,
                value_area: 800, // Adjust the area in which stars are distributed
              },
            },
            color: {
              value: '#ffffff', // Color of the stars
            },
            shape: {
              type: 'circle', // Shape of the stars
            },
            size: {
              value: 2, // Size of the stars
            },
            move: {
              enable: true,
              speed: 2, // Adjust the speed of stars
            },
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: 'repulse', // Change the interaction mode on hover if needed
              },
            },
          },
        });
      });
  
      return {};
    },
  };
  </script>
  
  <style scoped>
  /* You can style the starfield container here if needed */
  #particles-js {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1; /* Place it behind all other elements */
  }
  </style>
  
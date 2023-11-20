<template>
    <div class="matrix-background"></div>
  </template>
  
  <script>
  export default {
    mounted() {
      const canvas = document.createElement('canvas');
      this.$el.appendChild(canvas);
      const context = canvas.getContext('2d');
  
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      canvas.style.position = 'absolute';
      canvas.style.left = '0';
      canvas.style.top = '0';
  
      const characters = Array(256).fill(1).map((_, i) => String.fromCharCode(i));
      const fontSize = 10;
      const columns = canvas.width / fontSize;
      const drops = Array(Math.floor(columns)).fill(1);
  
      function draw() {
        context.fillStyle = 'rgba(0, 0, 0, 0.05)';
        context.fillRect(0, 0, canvas.width, canvas.height);
  
        context.fillStyle = '#0F0'; // Green text
        context.font = fontSize + 'px monospace';
  
        for (let i = 0; i < drops.length; i++) {
          const text = characters[Math.floor(Math.random() * characters.length)];
          context.fillText(text, i * fontSize, drops[i] * fontSize);
  
          if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
          }
          drops[i]++;
        }
  
        requestAnimationFrame(draw);
      }
  
      draw();
    }
  };
  </script>
  
  <style scoped>
  .matrix-background {
    position: relative;
    width: 100%;
    height: 100vh;
    overflow: hidden;
  }
  </style>
  
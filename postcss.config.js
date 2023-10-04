// postcss.config.js
module.exports = {
    plugins: {
      'postcss-nesting': {}, // Enable CSS nesting
      // Other PostCSS plugins if needed
    },
  };
  
  // tailwind.config.js
module.exports = {
    // ...
    build: {
      postcss: {
        plugins: {
          'postcss-nesting': {}, // Enable CSS nesting
          // Other PostCSS plugins if needed
        },
      },
    },
  };
  

<template>
  <div class="login-modal bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
    <h1 class="text-2xl font-bold mb-6 text-center text-gray-800">Login</h1>
    <form @submit.prevent="handleLogin" class="space-y-4">
      <input 
        type="email" 
        v-model="email" 
        required 
        placeholder="Enter your email" 
        class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button 
        type="submit"
        class="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
      >
        Login with Magic Link
      </button>
    </form>
    <div class="mt-4 text-center">
      <p class="text-gray-600">Or</p>
    </div>
    <button 
      @click="handleGoogleLogin"
      class="mt-4 w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition duration-300 flex items-center justify-center"
    >
      <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google logo" class="w-6 h-6 mr-2" />
      Login with Google
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import useMagic from '~/composables/useMagic';

const email = ref('');
const { loginWithMagicLink, loginWithGoogle } = useMagic();

const handleLogin = async () => {
  try {
    await loginWithMagicLink(email.value);
    // Redirect to profile page or handle successful login
    navigateTo('/profile');
  } catch (error) {
    console.error('Login failed:', error);
    // Handle login error (e.g., show error message to user)
  }
};

const handleGoogleLogin = async () => {
  try {
    await loginWithGoogle();
    // Redirect to profile page or handle successful login
    navigateTo('/profile');
  } catch (error) {
    console.error('Google login failed:', error);
    // Handle login error (e.g., show error message to user)
  }
};
</script>

<style scoped>
.login-container {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
}

input, button {
  display: block;
  width: 100%;
  margin-bottom: 10px;
  padding: 10px;
}
</style>
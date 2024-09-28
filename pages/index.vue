<template>
  <div class="auth-container">
    <div class="auth-content">
      <h2 class="auth-title">Welcome to They.Promo</h2>
      
      <!-- Magic Link Login Form -->
      <form @submit.prevent="handleMagicLinkLogin" class="auth-form">
        <label for="email" class="auth-label">Email Address</label>
        <input
          type="email"
          id="email"
          v-model="email"
          class="auth-input"
          placeholder="Enter your email"
          required
        />
        <button type="submit" class="auth-button">Login with Magic Link</button>
      </form>
      
      <div class="divider">OR</div>
      
      <!-- Google Social Login Button -->
      <button @click="handleGoogleLogin" class="auth-button google-button">
        <img src="/images/google-icon.svg" alt="Google Icon" class="google-icon" />
        Login with Google
      </button>
      
      <!-- Error Message -->
      <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
      
      <!-- Success Message -->
      <p v-if="successMessage" class="success-message">{{ successMessage }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import useMagic from '~/composables/useMagic';

const email = ref('');
const errorMessage = ref('');
const successMessage = ref('');

const { loginWithMagicLink, loginWithGoogle } = useMagic();

/**
 * Handles Magic Link Login
 */
const handleMagicLinkLogin = async () => {
  errorMessage.value = '';
  successMessage.value = '';
  
  try {
    await loginWithMagicLink(email.value);
    successMessage.value = 'Magic Link sent! Please check your email.';
  } catch (error: any) {
    console.error('Magic Link login failed:', error);
    errorMessage.value = error.message || 'Failed to send Magic Link. Please try again.';
  }
};

/**
 * Handles Google Social Login
 */
const handleGoogleLogin = async () => {
  errorMessage.value = '';
  successMessage.value = '';
  
  try {
    await loginWithGoogle();
    // The user will be redirected automatically after successful login
  } catch (error: any) {
    console.error('Google login failed:', error);
    errorMessage.value = error.message || 'Google login failed. Please try again.';
  }
};
</script>

<style scoped lang="scss">
.auth-container {
  display: grid;
  place-items: center; /* Centers both vertically and horizontally */
  min-height: 100vh;
  padding: 1rem;
  box-sizing: border-box;
  background-color: #f5f5f5;
}

.auth-content {
  width: 100%;
  max-width: 400px;
  background-color: #ffffff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.auth-title {
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
  color: #333333;
}

.auth-form {
  display: flex;
  flex-direction: column;
  align-items: stretch;
}

.auth-label {
  margin-bottom: 0.5rem;
  text-align: left;
  font-weight: bold;
  color: #555555;
}

.auth-input {
  padding: 0.75rem;
  margin-bottom: 1rem;
  border: 1px solid #cccccc;
  border-radius: 4px;
  font-size: 1rem;
}

.auth-button {
  padding: 0.75rem;
  background-color: #4a90e2;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.auth-button:hover {
  background-color: #357ab8;
}

.google-button {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #db4437;
  margin-top: 1rem;
}

.google-button:hover {
  background-color: #c33d2e;
}

.google-icon {
  width: 20px;
  height: 20px;
  margin-right: 0.5rem;
}

.divider {
  margin: 1.5rem 0;
  position: relative;
  text-align: center;
  color: #999999;
}

.divider::before,
.divider::after {
  content: '';
  position: absolute;
  top: 50%;
  width: 40%;
  height: 1px;
  background-color: #cccccc;
}

.divider::before {
  left: 0;
}

.divider::after {
  right: 0;
}

.error-message {
  margin-top: 1rem;
  color: #e74c3c;
  font-weight: bold;
}

.success-message {
  margin-top: 1rem;
  color: #2ecc71;
  font-weight: bold;
}
</style>

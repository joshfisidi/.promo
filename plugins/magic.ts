// plugins/magic.ts
import { defineNuxtPlugin } from '#app';
import { Magic } from 'magic-sdk';

export default defineNuxtPlugin((nuxtApp) => {
  const apiKey = process.env.NUXT_PUBLIC_MAGIC_API_KEY;
  if (!apiKey) throw new Error('Magic API key is not defined');

  let magic: any;

  if (process.client) {
    const { Magic } = require('magic-sdk');
    magic = new Magic(apiKey);
  }

  return {
    provide: {
      magic: () => magic
    }
  };
});

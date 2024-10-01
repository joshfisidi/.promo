// plugins/magic.ts
import { defineNuxtPlugin } from '#app';
import { Magic } from 'magic-sdk';

export default defineNuxtPlugin(() => {
  const magic = new Magic(process.env.NUXT_PUBLIC_MAGIC_API_KEY);

  return {
    provide: {
      magic,
    },
  };
});

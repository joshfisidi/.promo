// plugins/magic.client.js

import { Magic } from 'magic-sdk';

export default defineNuxtPlugin(nuxtApp => {
  const magicPublishableKey = useRuntimeConfig().public.magicPublishableKey;
  const magic = new Magic(magicPublishableKey); // Use the environment variable
  nuxtApp.provide('magic', magic);
  console.log('Magic plugin loaded');
});



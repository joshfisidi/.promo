import { useNuxtApp } from '#app';

export default function useMagic() {
  const nuxtApp = useNuxtApp();
  const magic = nuxtApp.$magic; // Access the Magic instance provided in the plugin

  return {
    loginWithGoogle: async () => {
      try {
        await magic.oauth.loginWithRedirect({
          provider: 'google', // Specify Google as the provider
          // Optional: Specify a redirect URI
          redirectURI: `${window.location.origin}/callback`, // Adjust as necessary
        });
        // The user will be redirected to Google for login
      } catch (error) {
        // Handle errors here
        console.error('OAuth login failed:', error);
      }
    },
    isLoggedIn: async () => await magic.user.isLoggedIn(),
    getUserMetadata: async () => await magic.user.getMetadata(),
    // Keep other methods as is
  };
}
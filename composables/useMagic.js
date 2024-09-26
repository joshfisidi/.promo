import { useNuxtApp } from '#app';
import { useRouter } from 'vue-router';

export default function useMagic() {
  const nuxtApp = useNuxtApp();
  const magic = nuxtApp.$magic;
  const router = useRouter();

  const checkLoginStatus = async () => {
    try {
      return await magic.user.isLoggedIn();
    } catch (error) {
      console.error('Error checking login status:', error);
      return false;
    }
  };

  const handleLoginSuccess = async () => {
    const isLoggedIn = await checkLoginStatus();
    if (isLoggedIn) {
      router.push('/home');
    }
  };

  return {
    loginWithMagicLink: async (email) => {
      try {
        await magic.auth.loginWithMagicLink({ email });
        await handleLoginSuccess();
      } catch (error) {
        console.error('Magic Link login failed:', error);
        throw error;
      }
    },
    loginWithGoogle: async () => {
      try {
        await magic.oauth.loginWithRedirect({
          provider: 'google',
          redirectURI: `${window.location.origin}/callback`,
        });
      } catch (error) {
        console.error('Google login failed:', error);
        throw error;
      }
    },
    isLoggedIn: checkLoginStatus,
    getUserMetadata: async () => await magic.user.getMetadata(),
    handleLoginSuccess,
    checkLoginStatus,
  };
}
import { useNuxtApp } from '#app';
import { useRouter } from 'vue-router';
import { Magic } from 'magic-sdk';

interface MagicInstance {
  auth: {
    loginWithMagicLink: (params: { email: string }) => Promise<void>;
  };
  oauth: {
    loginWithRedirect: (params: { provider: string; redirectURI: string }) => Promise<void>;
  };
  user: {
    isLoggedIn: () => Promise<boolean>;
    getMetadata: () => Promise<any>; // You might want to define a more specific type for user metadata
  };
}

export default function useMagic() {
  const nuxtApp = useNuxtApp();
  const magic = nuxtApp.$magic as MagicInstance;
  const router = useRouter();

  const handleLoginSuccess = async (): Promise<void> => {
    const isLoggedIn = await magic.user.isLoggedIn();
    if (isLoggedIn) {
      router.push('/profile');
    }
  };

  return {
    loginWithMagicLink: async (email: string): Promise<void> => {
      try {
        await magic.auth.loginWithMagicLink({ email });
        await handleLoginSuccess();
      } catch (error) {
        console.error('Magic Link login failed:', error);
        throw error;
      }
    },
    loginWithGoogle: async (): Promise<void> => {
      try {
        await magic.oauth.loginWithRedirect({
          provider: 'google',
          redirectURI: `${window.location.origin}/callback`,
        });
        // The user will be redirected to Google for login
      } catch (error) {
        console.error('Google login failed:', error);
        throw error;
      }
    },
    isLoggedIn: async (): Promise<boolean> => await magic.user.isLoggedIn(),
    getUserMetadata: async (): Promise<any> => await magic.user.getMetadata(),
    handleLoginSuccess,
  };
}
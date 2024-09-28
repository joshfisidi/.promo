import { ref } from 'vue';
import { useNuxtApp } from '#app';
import { useRouter } from 'vue-router';
import { Magic } from 'magic-sdk';
import { OAuthExtension } from '@magic-ext/oauth';

export default function useMagic() {
  const nuxtApp = useNuxtApp();
  const magic = nuxtApp.$magic as Magic & { oauth: OAuthExtension };
  const router = useRouter();

  const isLoggedIn = ref<boolean>(false);
  const userMetadata = ref<any>(null);

  /**
   * Updates the user's login status and metadata.
   */
  const updateUserInfo = async (): Promise<void> => {
    try {
      isLoggedIn.value = await magic.user.isLoggedIn();
      if (isLoggedIn.value) {
        userMetadata.value = await magic.user.getMetadata();
      } else {
        userMetadata.value = null;
      }
    } catch (error) {
      console.error('Error updating user info:', error);
      isLoggedIn.value = false;
      userMetadata.value = null;
    }
  };

  /**
   * Logs in the user using Magic Link authentication.
   * @param email - The user's email address.
   */
  const loginWithMagicLink = async (email: string): Promise<void> => {
    try {
      await magic.auth.loginWithMagicLink({ email });
      await updateUserInfo();
      router.push('/home');
    } catch (error) {
      console.error('Magic Link login failed:', error);
      throw error;
    }
  };

  /**
   * Logs in the user using Google OAuth.
   */
  const loginWithGoogle = async (): Promise<void> => {
    try {
      await magic.oauth.loginWithRedirect({
        provider: 'google',
        redirectURI: `${window.location.origin}/callback`,
      });
    } catch (error) {
      console.error('Google login failed:', error);
      throw error;
    }
  };

  /**
   * Logs out the user.
   */
  const logout = async (): Promise<void> => {
    try {
      await magic.user.logout();
      isLoggedIn.value = false;
      userMetadata.value = null;
      router.push('/auth');
    } catch (error) {
      console.error('Logout failed:', error);
      throw error;
    }
  };

  /**
   * Checks the user's authentication status and redirects if not logged in.
   */
  const checkAuth = async (): Promise<void> => {
    await updateUserInfo();
    if (!isLoggedIn.value) {
      router.push('/auth');
    }
  };

  return {
    loginWithMagicLink,
    loginWithGoogle,
    logout,
    checkAuth,
    isLoggedIn,
    userMetadata,
    updateUserInfo,
  };
}

import { ref } from 'vue';
import { useNuxtApp } from '#app';
import { useRouter } from 'vue-router';
import { ethers } from 'ethers';
import { Magic } from 'magic-sdk';
import { OAuthExtension } from '@magic-ext/oauth';

export default function useMagic() {
  const nuxtApp = useNuxtApp();
  const magic = nuxtApp.$magic as InstanceWithExtensions<Magic, [OAuthExtension]>;
  const router = useRouter();

  const ensName = ref<string | null>(null);
  const ensAvatar = ref<string | null>(null);
  const isLoggedIn = ref<boolean>(false);
  const userMetadata = ref<any>(null);

  const provider = new ethers.providers.JsonRpcProvider(process.env.NUXT_PUBLIC_ALCHEMY_RPC_URL);

  /**
   * Fetches the ENS name and avatar for a given Ethereum address.
   * @param address - The Ethereum address to lookup.
   */
  const fetchENSDetails = async (address: string): Promise<void> => {
    try {
      const name = await provider.lookupAddress(address);
      if (name) {
        ensName.value = name;
        const resolver = await provider.getResolver(name);
        if (resolver) {
          const avatar = await resolver.getText('avatar');
          if (avatar) {
            if (avatar.startsWith('ipfs://')) {
              const ipfsHash = avatar.slice(7);
              ensAvatar.value = `https://ipfs.io/ipfs/${ipfsHash}`;
            } else {
              ensAvatar.value = avatar;
            }
          } else {
            ensAvatar.value = null;
          }
        } else {
          ensAvatar.value = null;
        }
      } else {
        ensName.value = null;
        ensAvatar.value = null;
      }
    } catch (error) {
      console.error('Error fetching ENS details:', error);
      ensName.value = null;
      ensAvatar.value = null;
    }
  };

  /**
   * Updates the user's login status, metadata, and ENS details.
   */
  const updateUserInfo = async (): Promise<void> => {
    try {
      isLoggedIn.value = await magic.user.isLoggedIn();
      if (isLoggedIn.value) {
        userMetadata.value = await magic.user.getMetadata();
        await fetchENSDetails(userMetadata.value.publicAddress);
      } else {
        userMetadata.value = null;
        ensName.value = null;
        ensAvatar.value = null;
      }
    } catch (error) {
      console.error('Error updating user info:', error);
      isLoggedIn.value = false;
      userMetadata.value = null;
      ensName.value = null;
      ensAvatar.value = null;
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
      ensName.value = null;
      ensAvatar.value = null;
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
    ensName,
    ensAvatar,
    updateUserInfo,
  };
}
// server/middleware/magicAuth.ts
import { defineEventHandler, H3Event } from 'h3';
import { Magic } from '@magic-sdk/admin';

const magic = new Magic(process.env.MAGIC_SECRET_KEY!);

export default defineEventHandler(async (event: H3Event) => {
  const authHeader = event.req.headers.authorization;

  if (authHeader) {
    const didToken = authHeader.split('Bearer ').pop();
    try {
      magic.token.validate(didToken!);
      const metadata = await magic.users.getMetadataByToken(didToken!);

      // Attach user metadata to the request
      event.context.user = metadata;
    } catch (error) {
      console.error('Invalid Magic.link token', error);
    }
  }
});

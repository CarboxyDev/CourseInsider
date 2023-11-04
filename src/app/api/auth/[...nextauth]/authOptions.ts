import { prisma } from '@/lib/prisma';
import { PrismaAdapter } from '@auth/prisma-adapter';
import { NextAuthOptions } from 'next-auth';
import { Adapter } from 'next-auth/adapters';
import GoogleProvider from 'next-auth/providers/google';

const adapter = PrismaAdapter(prisma) as Adapter;

export const authOptions: NextAuthOptions = {
  adapter: adapter,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      console.log('[!][Sign in]', {
        user,
        account,
        profile,
        email,
        credentials,
      });
      return true;
    },

    async redirect({ url, baseUrl }) {
      return baseUrl;
    },
  },
  session: {
    strategy: 'database',
    maxAge: 30 * 24 * 60 * 60,
  },
};

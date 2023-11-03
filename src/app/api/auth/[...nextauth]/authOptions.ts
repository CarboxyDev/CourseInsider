import { prisma } from '@/lib/prisma';
import { PrismaAdapter } from '@auth/prisma-adapter';
import { NextAuthOptions } from 'next-auth';
import { Adapter } from 'next-auth/adapters';

const adapter = PrismaAdapter(prisma) as Adapter;

export const authOptions: NextAuthOptions = {
  adapter: adapter,
  providers: [],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      return true;
    },

    async redirect({ url, baseUrl }) {
      return baseUrl;
    },
  },
};

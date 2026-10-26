import { polar, checkout, portal } from "@polar-sh/better-auth";
import type { Database } from "@study/db";
import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { nextCookies } from "better-auth/next-js";

import { createPolarClient } from "./lib/payments";

export type AuthConfig = {
  BETTER_AUTH_URL: string;
  BETTER_AUTH_SECRET: string;
  GOOGLE_CLIENT_ID: string;
  GOOGLE_CLIENT_SECRET: string;
  POLAR_PRODUCT_ID: string;
  POLAR_ACCESS_TOKEN: string;
  POLAR_SUCCESS_URL: string;
};

export function createAuth(env: AuthConfig, database: Database) {
  return betterAuth({
    database: prismaAdapter(database, {
      provider: "postgresql",
    }),
    trustedOrigins: [env.BETTER_AUTH_URL],
    emailAndPassword: { enabled: true },
    secret: env.BETTER_AUTH_SECRET,
    baseURL: env.BETTER_AUTH_URL,
    socialProviders: {
      google: {
        clientId: env.GOOGLE_CLIENT_ID,
        clientSecret: env.GOOGLE_CLIENT_SECRET,
      },
    },
    plugins: [
      polar({
        client: createPolarClient(env),
        createCustomerOnSignUp: true,
        use: [
          checkout({
            products: [{ productId: env.POLAR_PRODUCT_ID, slug: "pro" }],
            successUrl: env.POLAR_SUCCESS_URL,
            authenticatedUsersOnly: true,
          }),
          portal(),
        ],
      }),
      nextCookies(),
    ],
  });
}

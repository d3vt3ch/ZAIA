import { createEmailClient } from "@opencoredev/email-sdk";
import { resend } from "@opencoredev/email-sdk/resend";

export interface Env {
  RESEND_API_KEY: string;
}

export const createEmail = (env: Env) =>
  createEmailClient({
    adapters: [resend({ apiKey: env.RESEND_API_KEY })],
  });

export type { EmailClient } from "@opencoredev/email-sdk";

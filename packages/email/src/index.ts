import { createEmailClient } from "@opencoredev/email-sdk";
import { resend } from "@opencoredev/email-sdk/resend";

export type EmailConfig = {
  RESEND_API_KEY: string;
};

export function createEmail(env: EmailConfig) {
  return createEmailClient({
    adapters: [resend({ apiKey: env.RESEND_API_KEY })],
  });
}

export type { EmailClient } from "@opencoredev/email-sdk";

import { Files } from "files-sdk";
import { r2 } from "files-sdk/r2";

export interface Env {
  R2_BUCKET: string;
  R2_ACCOUNT_ID: string;
  R2_ACCESS_KEY_ID: string;
  R2_SECRET_ACCESS_KEY: string;
}

export const createFiles = (env: Env) =>
  new Files({
    adapter: r2({
      accessKeyId: env.R2_ACCESS_KEY_ID,
      accountId: env.R2_ACCOUNT_ID,
      bucket: env.R2_BUCKET,
      secretAccessKey: env.R2_SECRET_ACCESS_KEY,
    }),
  });

export type { Files } from "files-sdk";

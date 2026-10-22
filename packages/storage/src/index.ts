import { Files } from "files-sdk";
import { r2 } from "files-sdk/r2";

export type StorageConfig = {
  R2_BUCKET: string;
  R2_ACCOUNT_ID: string;
};

export function createFiles(env: StorageConfig) {
  return new Files({
    adapter: r2({
      bucket: env.R2_BUCKET,
      accountId: env.R2_ACCOUNT_ID,
    }),
  });
}

export type { Files } from "files-sdk";

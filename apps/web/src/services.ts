import { createAuth } from "@study/auth";
import { type Database, createPrismaClient } from "@study/db";
import { createEmail } from "@study/email";
import { createFiles } from "@study/storage";

import { env } from "./env.server";

const db = createPrismaClient(env);

export function getDb(): Database {
  return db;
}
export const auth = createAuth(env, db);
export const files = createFiles(env);
export const email = createEmail(env);

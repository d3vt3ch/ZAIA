import { createAuth } from "@study/auth";
import { createPrismaClient } from "@study/db";
import type { Database } from "@study/db";
import { createEmail } from "@study/email";
import { createFiles } from "@study/storage";

import { env } from "./env.server";

const db = createPrismaClient(env);

export const getDb = (): Database => db;

export const auth = createAuth(env, db);
export const files = createFiles(env);
export const email = createEmail(env);

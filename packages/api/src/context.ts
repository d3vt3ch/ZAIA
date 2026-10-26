import type { createAuth } from "@study/auth";
import type { Database } from "@study/db";

export interface Context {
  auth: null;
  session: Awaited<
    ReturnType<ReturnType<typeof createAuth>["api"]["getSession"]>
  >;
  db: Database;
}

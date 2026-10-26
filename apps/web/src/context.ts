import type { Context as ApiContext } from "@study/api/context";
import type { NextRequest } from "next/server";

import { getDb, auth } from "./services";

export const createContext = async (req: NextRequest): Promise<ApiContext> => {
  const db = getDb();

  const session = await auth.api.getSession({
    headers: req.headers,
  });

  return {
    db,
    auth: null,
    session,
  };
};

export type Context = Awaited<ReturnType<typeof createContext>>;

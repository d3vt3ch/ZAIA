import { Polar } from "@polar-sh/sdk";

export const createPolarClient = (config: { POLAR_ACCESS_TOKEN: string }) =>
  new Polar({
    accessToken: config.POLAR_ACCESS_TOKEN,
    server: "sandbox",
  });

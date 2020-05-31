import { MySQL, config } from "../deps.ts";

export async function mysql(): Promise<MySQL> {
  return await new MySQL().connect({
    hostname: config().DB_HOST,
    username: config().DB_USERNAME,
    db: config().DB_DATABASE,
    port: parseInt(config().DB_PORT),
    poolSize: parseInt(config().DB_POOLSIZE) || 3,
    password: config().DB_PASSWORD,
  });
}

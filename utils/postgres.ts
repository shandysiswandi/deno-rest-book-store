import { PostgreSQL, config } from "../deps.ts";

export async function postgres(): Promise<PostgreSQL> {
  const client = new PostgreSQL({
    user: config().DB_USERNAME,
    database: config().DB_DATABASE,
    hostname: config().DB_HOST,
    port: parseInt(config().DB_PORT),
    password: config().DB_PASSWORD,
  });

  await client.connect();

  return client;
}

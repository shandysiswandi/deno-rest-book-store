import { Client } from "https://deno.land/x/postgres/mod.ts";
import { config } from "https://deno.land/x/dotenv/mod.ts";

const client = new Client({
  user: config().DB_USERNAME,
  database: config().DB_DATABASE,
  hostname: config().DB_HOST,
  port: parseInt(config().DB_PORT),
  password: config().DB_PASSWORD,
});

export { client };

import { Client, config } from "../deps.ts";

export default new Client({
  user: config().DB_USERNAME,
  database: config().DB_DATABASE,
  hostname: config().DB_HOST,
  port: parseInt(config().DB_PORT),
  password: config().DB_PASSWORD,
});

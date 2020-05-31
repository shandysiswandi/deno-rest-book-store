import { MySQL, PostgreSQL, config } from "../deps.ts";
import { mysql } from "../utils/mysql.ts";
import { postgres } from "../utils/postgres.ts";

async function connection(): Promise<PostgreSQL | MySQL | Object> {
  switch (config().DB_DRIVER) {
    case "mysql": {
      return mysql();
    }

    case "postgres": {
      return postgres();
    }

    default: {
      console.log("Please check .env file");
      Deno.exit(1);
    }
  }
}

const database = await connection();

export { database };

import { Application, config } from "./deps.ts";
import database from "./config/database.ts";
import { routes } from "./routes/router.ts";

/**
 * Initial variable
 * @app instance from @Application
 * @env assign @config
 */
const app: Application = new Application();
const env = config();

/**
 * Initial all route
 */
routes(app);

/**
 * Connect to database
 */
await database.connect();

/**
 * Listen app to config env
 */
await app.listen({ port: parseInt(env.PORT) });

/**
 * close/end to database
 */
await database.end();

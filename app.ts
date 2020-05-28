import { Application } from "https://deno.land/x/oak/mod.ts";
import { config } from "https://deno.land/x/dotenv/mod.ts";
import { router } from "./routes/router.ts";
import { client } from "./config/database.ts";

const app: Application = new Application();
const env = config();

app.use(router.routes());
app.use(router.allowedMethods());

await client.connect();

console.log(`Listening on ${env.HOST}:${env.PORT}`);
await app.listen({ port: parseInt(env.PORT) });

await client.end();

import { Application, config } from "./deps.ts";
import router from "./routes/router.ts";
import Client from "./config/database.ts";

const app: Application = new Application();
const env = config();

app.use(router.routes());
app.use(router.allowedMethods());

await Client.connect();

console.log(`Listening on ${env.HOST}:${env.PORT}`);
await app.listen({ port: parseInt(env.PORT) });

await Client.end();

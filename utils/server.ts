import { Application, config, bgGreen, black } from "../deps.ts";

const env = config();

export async function start(app: Application): Promise<void> {
  console.log(bgGreen(black(`Listening on ${env.HOST}:${env.PORT}`)));
  await app.listen({ port: parseInt(env.PORT) });
}

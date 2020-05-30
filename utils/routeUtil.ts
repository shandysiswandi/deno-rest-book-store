import { Application, Router } from "./deps.ts";

function route(app: Application, router: Router): void {
  app.use(router.routes());
  app.use(router.allowedMethods());
}

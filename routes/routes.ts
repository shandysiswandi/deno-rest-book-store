import { Application } from "../deps.ts";
import homeRouter from "./homeRouter.ts";
import bookRouter from "./bookRouter.ts";

export const routes = (app: Application) => {
  app.use(homeRouter.routes());
  app.use(homeRouter.allowedMethods());

  app.use(bookRouter.routes());
  app.use(bookRouter.allowedMethods());
};

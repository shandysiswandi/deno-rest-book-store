import { Application, Router } from "../deps.ts";
import { home, book } from "../controllers/mod.ts";
import { timing, logger } from "../middleware/mod.ts";
import { handleErrors } from "../handlers/errors.ts";

const router = new Router();
const api = "api/v1/";

/**
 * @home : /
 */
router.get("/", home.index);

/**
 * @book : /api/v1/books
 */
router
  .get(api + "/books", book.index)
  .get(api + "/books/:id", book.show)
  .post(api + "/books", book.store)
  .put(api + "/books/:id", book.update)
  .delete(api + "/books/:id", book.delete);

export const routes = (app: Application) => {
  // middleware
  app.use(timing);
  app.use(logger);

  // errors handling
  app.use(handleErrors);

  // asignment routes
  app.use(router.routes());
  app.use(router.allowedMethods());
};

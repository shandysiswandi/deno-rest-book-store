import { Application, Router } from "../deps.ts";
import BookController from "../controllers/BookController.ts";
import HomeController from "../controllers/HomeController.ts";
import { errorHandler } from "../handlers/errors.ts";

const router = new Router();
const baseApi = "api/v1/";

/**
 * @home : /
 */
router.get("/", HomeController.index);

/**
 * @book : /api/v1/books
 */
router
  .get(baseApi + "/books", BookController.index)
  .get(baseApi + "/books/:id", BookController.show)
  .post(baseApi + "/books", BookController.store)
  .put(baseApi + "/books/:id", BookController.update)
  .delete(baseApi + "/books/:id", BookController.delete);

export const routes = (app: Application) => {
  // asignment routes
  app.use(router.routes());
  app.use(router.allowedMethods());

  // error handling
  app.use(errorHandler);
};

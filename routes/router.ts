import { Application, Router } from "../deps.ts";
import bookController from "../controllers/BookController.ts";
import { errorHandler } from "../handlers/errors.ts";

const router = new Router();
const baseApi = "api/v1/";

/**
 * @home : /
 */
router.get("/", (ctx) => {
  ctx.response.status = 200;
  ctx.response.body = {
    status: true,
    message: "Hello Home",
  };
});

/**
 * @book : /api/v1/books
 */
router
  .get(baseApi + "/books", bookController.index)
  .get(baseApi + "/books/:id", bookController.show)
  .post(baseApi + "/books", bookController.store)
  .put(baseApi + "/books/:id", bookController.update)
  .delete(baseApi + "/books/:id", bookController.delete);

export const routes = (app: Application) => {
  // asignment routes
  app.use(router.routes());
  app.use(router.allowedMethods());

  // error handling
  app.use(errorHandler);
};

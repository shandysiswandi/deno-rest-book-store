import { Router } from "../deps.ts";
import bookController from "../controllers/BookController.ts";

export default new Router()
  .get("/books", bookController.index)
  .get("/books/:id", bookController.show)
  .post("/books", bookController.store)
  .put("/books/:id", bookController.update)
  .delete("/books/:id", bookController.delete);

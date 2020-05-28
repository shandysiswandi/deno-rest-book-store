import { Router } from "https://deno.land/x/oak/mod.ts";
import bookController from "../controllers/bookController.ts";

const router: Router = new Router();

router.get("/", (ctx) => {
  ctx.response.status = 200;
  ctx.response.body = {
    status: true,
    message: "Hello Home",
  };
});

router.get("/books", bookController.index);
router.get("/books/:id", bookController.show);
router.post("/books", bookController.store);
router.put("/books/:id", bookController.update);
router.delete("/books/:id", bookController.delete);

export { router };

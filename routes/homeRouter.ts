import { Router } from "../deps.ts";
import bookController from "../controllers/BookController.ts";

export default new Router().get("/", (ctx) => {
  ctx.response.status = 200;
  ctx.response.body = {
    status: true,
    message: "Hello Home",
  };
});

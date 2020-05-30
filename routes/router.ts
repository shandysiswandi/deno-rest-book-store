import { Router } from "../deps.ts";
import bookRouter from "./bookRouter.ts";

const router: Router = new Router();

router.get("/", (ctx) => {
  ctx.response.status = 200;
  ctx.response.body = {
    status: true,
    message: "Hello Home",
  };
});

export { router, bookRouter };

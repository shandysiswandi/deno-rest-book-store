import { Router } from "../deps.ts";

export default new Router().get("/", (ctx) => {
  ctx.response.status = 200;
  ctx.response.body = {
    status: true,
    message: "Hello Home",
  };
});

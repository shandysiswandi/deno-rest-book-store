import { Context } from "../deps.ts";

export async function handleErrors(ctx: Context, next: () => Promise<void>) {
  try {
    await next();
  } catch (err) {
    ctx.response.type = "json";
    ctx.response.status = err.status;
    ctx.response.body = { error: err, message: "Internal server error" };
  }
}

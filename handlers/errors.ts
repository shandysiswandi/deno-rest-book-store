import { Response } from "../deps.ts";

export async function errorHandler(ctx: { response: Response }, next: any) {
  try {
    await next();
  } catch (err) {
    ctx.response.status = 500;
    ctx.response.body = { error: "Server error", message: err };
  }
}

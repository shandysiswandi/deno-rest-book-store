import { RouterContext } from "../deps.ts";

class HomeController {
  async index(context: RouterContext) {
    context.response.status = 200;
    context.response.body = {
      status: true,
      message: "Welcome to The Dinosaur's House",
    };
  }
}

export default new HomeController();

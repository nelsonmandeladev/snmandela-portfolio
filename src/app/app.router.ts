import { RouterComponent, defineRouter } from "rasengan";
import Home from "@/app/home.page";
import AppLayout from "@/app/app.layout";
import postsRouter from "./posts/posts.router";

class AppRouter extends RouterComponent {}

export default defineRouter({
  imports: [postsRouter],
  layout: AppLayout,
  pages: [Home],
})(AppRouter);

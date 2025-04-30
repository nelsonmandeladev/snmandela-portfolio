import { RouterComponent, defineRouter } from "rasengan";
import PostsPage from "./posts.page";
import PostsLayout from "./posts.layout";

class PostsRouter extends RouterComponent {}

export default defineRouter({
  imports: [],
  layout: PostsLayout,
  pages: [PostsPage],
})(PostsRouter);

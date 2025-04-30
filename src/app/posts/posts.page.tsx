import { PageComponent } from "rasengan";
import React from "react";

const PostsPage: PageComponent = () => {
  return (
    <React.Fragment>
      <div className="text-white">
        Posts Page Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Alias, facere non voluptates recusandae officiis consequuntur placeat ea
        deleniti. Aut deleniti mollitia id inventore placeat autem amet alias
        assumenda saepe qui.
      </div>
    </React.Fragment>
  );
};

PostsPage.path = "/";
PostsPage.metadata = {
  title: "Posts page",
  description: "This is the posts page",
};
export default PostsPage;

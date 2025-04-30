import { LayoutComponent, Outlet } from "rasengan";
import React from "react";

const PostsLayout: LayoutComponent = () => {
  return (
    <React.Fragment>
      <Outlet />
    </React.Fragment>
  );
};

PostsLayout.path = "/posts";
export default PostsLayout;

import React from "react";

import "@rasenganjs/image/css";
import "@/styles/index.css";
import { type AppProps } from "rasengan";
import AppRouter from "@/app/app.router";

export default function App({ Component, children }: AppProps) {
  return (
    <React.Fragment>
      <Component router={AppRouter}>{children}</Component>
    </React.Fragment>
  );
}

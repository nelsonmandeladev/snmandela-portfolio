import React from "react";

import { PageComponent } from "rasengan";
import { HeroSection } from "@/components";

const Home: PageComponent = () => {
  return (
    <React.Fragment>
      <HeroSection />
    </React.Fragment>
  );
};

Home.path = "/";
Home.metadata = {
  title: "Home",
  description: "Home page",
};

export default Home;

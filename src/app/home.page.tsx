import React from "react";

import { PageComponent } from "rasengan";
import {
  AboutSection,
  HeroSection,
  ServicesSection,
  WorkHistory,
} from "@/components";

const Home: PageComponent = () => {
  return (
    <React.Fragment>
      <HeroSection />
      <AboutSection />
      <WorkHistory />
      <ServicesSection />
    </React.Fragment>
  );
};

Home.path = "/";
Home.metadata = {
  title: "Home",
  description: "Home page",
};

export default Home;

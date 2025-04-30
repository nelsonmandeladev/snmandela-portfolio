import React from "react";
import { Outlet, LayoutComponent } from "rasengan";
import { SidebarInfo } from "@/components";

const AppLayout: LayoutComponent = () => {
  return (
    <React.Fragment>
      <div className="min-h-dvh h-full flex justify-center bg-black">
        <div className="container h-screen overflow-hidden border-x-[0.5px] border-body/30 grid grid-cols-1 md:grid-cols-[35%_1fr] relative">
          <SidebarInfo />
          <div className="overflow-y-auto h-screen xl:px-20 2xl:px-40 pt-20">
            <Outlet />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

AppLayout.path = "/";

export default AppLayout;

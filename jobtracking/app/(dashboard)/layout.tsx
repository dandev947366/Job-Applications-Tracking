import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

import { PropsWithChildren } from "react";

function layout({ children }: PropsWithChildren) {
  return (
    <>
      {" "}
      <div className="lg:block lg:col-span-1 lg:min-h-screen bg-gray-200">
        <div className="lg:col-span-4">
          {" "}
          <div className="py-16 px-4 sm:px-8 lg:px-16">{children}</div>
        </div>
      </div>
    </>
  );
}
export default layout;

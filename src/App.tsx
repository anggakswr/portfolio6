import { NextUIProvider } from "@nextui-org/react";
import CustomSidebar from "./components/CustomSidebar";
import { Outlet } from "react-router-dom";
import CustomNavbarV2 from "./components/CustomNavbarV2";

function App() {
  return (
    <NextUIProvider>
      <div className="bg-gray-900 p-4 md:p-8">
        <CustomNavbarV2 />

        <div className="mx-auto flex min-h-screen gap-8 pt-16 md:w-[900px] md:pt-0">
          {/* sidebar (fixed) */}
          <CustomSidebar />

          <div className="hidden w-48 md:block">
            {/* empty div for spacing */}
          </div>

          {/* content */}
          <div className="flex-1">
            <Outlet />

            <div className="mt-8 border-t p-4 text-center">
              <p className="text-sm font-bold">
                Made with &hearts; by Kamiswara Angga W.
              </p>
            </div>
          </div>
        </div>
      </div>
    </NextUIProvider>
  );
}

export default App;

import { NextUIProvider } from "@nextui-org/react";
import CustomSidebar from "./components/CustomSidebar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <NextUIProvider>
      <div className="bg-gray-900 p-8">
        <div className="mx-auto flex min-h-screen w-[900px] gap-8">
          {/* sidebar (fixed) */}
          <CustomSidebar />

          <div className="w-48">{/* empty div for spacing */}</div>

          {/* content */}
          <div className="flex-1">
            <Outlet />
          </div>
        </div>
      </div>
    </NextUIProvider>
  );
}

export default App;

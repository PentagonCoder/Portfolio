// src/components/layout/Layout.jsx
import { Outlet } from "react-router-dom";
import Topbar from "./Topbar";

export default function Layout() {
  return (
    <div className="min-h-screen bg-[#f7f8fc]">
      <div className="min-h-screen">
        <Topbar />
        <main className="mx-auto max-w-7xl p-4 sm:p-6 lg:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

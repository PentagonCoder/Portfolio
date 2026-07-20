// App.jsx
import { Navigate, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import Layout from "./components/layout/Layout";
const DashboardUser = lazy(() => import("./pages/User/Dashboard"));

function App() {
  return (
    <Suspense fallback={<div className="p-8">Loading...</div>}>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<DashboardUser />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Suspense>
  );
}
export default App;

// src/routes/ProtectedRoute.jsx
import { Navigate, useLocation } from "react-router-dom";
import useAuthStore from "../store/authStore";
import Spinner from "../components/ui/Spinner";

export default function ProtectedRoute({ children, roles = [] }) {
  // Select primitive/store values individually so Zustand returns stable snapshots.
  // Returning a new object from the selector on every render causes React's
  // useSyncExternalStore subscription to loop indefinitely.
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const isLoading = useAuthStore((state) => state.isLoading);
  const user = useAuthStore((state) => state.user);
  const location = useLocation();

  if (isLoading) return <div className="flex items-center justify-center h-64"><Spinner /></div>;

  if (!isAuthenticated) return <Navigate to="/login" state={{ from: location }} replace />;

  if (roles.length && !roles.includes(user?.role)) return <Navigate to="/user/dashboard" replace />;

  return children;
}

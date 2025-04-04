import { Routes, Route, Navigate } from "react-router-dom";
import UsersContainer from "../../features/users/UsersContainer";
import LoginContainer from "../../features/auth/LoginContainer";
import { JSX } from "react";

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const user = localStorage.getItem("authUser");
  return user ? children : <Navigate to="/login" />;
};

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginContainer />} />
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <UsersContainer />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default AppRouter;
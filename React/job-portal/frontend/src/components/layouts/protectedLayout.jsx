import { Outlet, Navigate } from "react-router-dom";
import Navbar from '../navbar'
import { useSelector } from "react-redux";

const ProtectedLayout = () => {

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />
  }

  return (
    <>
      <Navbar />

      <main className="container-fluid py-3">
        <Outlet />
      </main>
    </>
  )
}
export default ProtectedLayout;
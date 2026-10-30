import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

const PublicLayout = () => {

    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

    if (isAuthenticated) {
        return <Navigate to="/home" replace />
    }

    return (
        <>
            <Outlet />
        </>
    )
}
export default PublicLayout;
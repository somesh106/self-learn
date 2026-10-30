import { useRoutes, Navigate } from 'react-router-dom';
import Home from '../pages/home'
import Login from '../pages/login';
import Signup from '../pages/signup';
import PublicLayout from '../components/layouts/publicLayout'
import ProtectedLayout from '../components/layouts/protectedLayout';
import NotFound from '../pages/notFound';
import JobDetails from '../pages/jobDetails';
import SavedJobs from '../pages/savedJobs';
import ForgotPassword from '../pages/forgotPassword';
import ApplyJob from '../pages/applyJob';

export const AppRoutes = () => {

    const routes = useRoutes([
        {
            path: "/",
            element: <Navigate to="/login" replace />
        },

        {
            element: <PublicLayout />,
            children: [
                {
                    path: "/login",
                    element: <Login />
                },
                {
                    path: "/signup",
                    element: <Signup />
                },
                {
                    path: "/forgot-password",
                    element: <ForgotPassword />
                }
            ]
        },

        {
            element: <ProtectedLayout />,
            children: [
                {
                    path: "/home",
                    element: <Home />
                },
                {
                    path: "/job/:id",
                    element: <JobDetails />
                },
                {
                    path: "/saved-jobs",
                    element: <SavedJobs />
                },
                {
                    path: "/apply/:id",
                    element: <ApplyJob />
                }
            ]
        },

        {
            path: "*",
            element: <NotFound />
        }
    ])
    return routes;
}
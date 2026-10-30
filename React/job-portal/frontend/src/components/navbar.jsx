import { FaUser, FaBox, FaCog, FaSignOutAlt } from "react-icons/fa";
import { SlOptionsVertical } from "react-icons/sl";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../store/slices/authSlice";

const Navbar = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector((state) => state.auth.user);

    const SavedJobs = useSelector(
        (state) => state.savedJobs.jobs
    );

    const savedCount = SavedJobs.length;

    return (
        <nav className="navbar bg-white shadow-sm sticky-top">
            <div className="container-fluid px-4 d-flex align-items-center justify-content-between">

                {/* Logo */}
                <Link to="/home">
                    <h4 className="mb-0 fw-bold position-absolute start-50 translate-middle-x">
                        Job Portal
                    </h4>
                </Link>

                {/* Right Side */}
                <div className="d-flex align-items-center gap-5 ms-auto">

                    <div className="position-relative">
                        <Link to="/saved-jobs" className="text-dark text-decoration-none" >

                            <i className="bi bi-heart fs-4"></i>

                        </Link>

                        {savedCount > 0 && (
                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                {savedCount}
                            </span>
                        )}
                    </div>

                    <div className="d-flex align-items-center gap-2">

                        <div
                            className="rounded-circle bg-secondary d-flex align-items-center justify-content-center"
                            style={{
                                width: "45px",
                                height: "45px"
                            }}
                        >
                            <i className="bi bi-person-fill text-white"></i>
                        </div>

                        <h6 className="mb-0"> {user?.email || "User"} </h6>

                    </div>

                    {/* Dropdown */}
                    <div className="dropdown">
                        <button className="btn border-0 p-0" type="button" data-bs-toggle="dropdown">
                            <SlOptionsVertical className="fs-5" />
                        </button>

                        <ul className="dropdown-menu dropdown-menu-end shadow rounded-4 p-3 profile-dropdown">
                            <li>
                                <button className="dropdown-item d-flex align-items-center gap-3 rounded-3 fs-6 py-2">
                                    <FaUser className="fs-5" />
                                    Profile
                                </button>
                            </li>

                            <li>
                                <button className="dropdown-item d-flex align-items-center gap-3 rounded-3 fs-6 py-2">
                                    <FaBox className="fs-5" />
                                    My Jobs
                                </button>
                            </li>

                            <li>
                                <button className="dropdown-item d-flex align-items-center gap-3 rounded-3 fs-6 py-2">
                                    <FaCog className="fs-5" />
                                    Settings
                                </button>
                            </li>

                            <li>
                                <hr className="dropdown-divider my-2" />
                            </li>

                            <li>
                                <button
                                    className="dropdown-item d-flex align-items-center gap-3 rounded-3 fs-6 py-2 text-danger" onClick={() => {
                                        dispatch(logoutUser());
                                        navigate("/login", { replace: true });
                                    }}
                                >
                                    <FaSignOutAlt className="fs-5" />
                                    Logout
                                </button>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </nav>
    );
}

export default Navbar;
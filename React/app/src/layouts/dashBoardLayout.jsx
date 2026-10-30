import { Outlet, Link, useNavigate } from "react-router-dom";
import { useCommon } from "../context/commonContex";
import { FaSearch, FaUser, FaBox, FaCog, FaSignOutAlt, FaUserCircle } from "react-icons/fa";
import { SlOptionsVertical } from "react-icons/sl";
import amazon from "../assets/images/amazon.jpg";
import { useEffect } from "react";
import { fetchAllProucts } from "../services";

import { useSelector, useDispatch } from "react-redux";         //redux
import { setSearch, setAllProduct } from "../redux/commonSlice";
import { logout } from "../redux/authSlice";


export default function DashboardLayout() {

    const { setIsLike, setIsCart } = useCommon();

    //redux
    const dispatch = useDispatch();
    const userInfo = useSelector(
        (state) => state.auth.userInfo
    );
    const search = useSelector(
        (state) => state.common.search
    );
    const allProduct = useSelector(
        (state) => state.common.allProduct
    );
    const cartProduct = useSelector(
        (state) => state.common.cartProduct
    );
    const likedProduct = useSelector(
        (state) => state.common.likedProduct
    );

    // console.log("Dashboard userInfo:", userInfo);

    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/userDetails");
    }

    const handleLogout = () => {
        dispatch(logout());
        navigate("/login");
    };

    useEffect(() => {
        const getProducts = async () => {
            const result = await fetchAllProucts();
            dispatch(setAllProduct(result.products));

            // console.log(result.products);
        };

        getProducts();
    }, [dispatch]);

    return (
        <>
            <nav className="navbar bg-white shadow-sm sticky-top">
                <div className="container-fluid px-3 d-flex align-items-center justify-content-between">

                    {/* Logo */}
                    <div className="d-flex align-items-center gap-2">
                        <img
                            src={amazon}
                            alt="logo"
                            width="60"
                            height="50"
                            className="pt-2"
                        />

                        <h4
                            className="mb-0 fw-bold"
                            onClick={() => {
                                dispatch(setSearch(""));            //redux

                                navigate("/dashboard");
                            }}
                            style={{ cursor: "pointer" }}
                        >
                            amazon
                        </h4>
                    </div>

                    {/* Search */}
                    <div className="col-md-5 col-lg-4 d-flex justify-content-center gap-2">
                        <div className="position-relative flex-grow-1">
                            <input
                                type="text"
                                className="form-control pe-5"
                                placeholder="Search products..."
                                value={search}
                                onChange={(e) => dispatch(setSearch(e.target.value))}       //redux
                            />

                            <FaSearch className="position-absolute top-50 end-0 translate-middle-y me-2 text-secondary" />
                        </div>

                        {/* <button className="btn btn-primary">
                            Search
                        </button> */}
                    </div>

                    {/* Wishlist */}
                    <div className="d-flex align-items-center gap-4">
                        <Link
                            to="/wishlist"
                            className="text-dark position-relative"
                            onClick={() => {
                                setIsLike(true);
                                setIsCart(false);
                            }}
                        >
                            <i
                                className="bi bi-heart fs-4"
                                style={{ color: likedProduct.length > 0 ? "red" : "black" }}
                            />

                            {likedProduct.length > 0 && (
                                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                    {likedProduct.length}
                                </span>
                            )}
                        </Link>

                        {/* Cart */}
                        <Link
                            to="/wishlist"
                            className="text-dark position-relative"
                            onClick={() => {
                                setIsCart(true);
                                setIsLike(false);
                            }}
                        >
                            <i
                                className="bi bi-cart3 fs-4"
                                style={{ color: cartProduct.length > 0 ? "red" : "black" }}
                            />

                            {cartProduct.length > 0 && (
                                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                    {cartProduct.length}
                                </span>
                            )}
                        </Link>

                        {/* User */}
                        <div className="d-flex align-items-center gap-2">
                            <div
                                className="rounded-circle overflow-hidden d-flex align-items-center justify-content-center" style={{ width: "45px", height: "45px" }}
                            >
                                {userInfo?.image ? (
                                    <img
                                        src="https://img.magnific.com/premium-vector/round-man-character-mockup-icon-flat-color-round-man-icon-blue-jacket-brown-hair-character-template-vector-icon_774778-2423.jpg?semt=ais_hybrid&w=740&q=80"
                                        // src={userInfo.image}
                                        alt="Profile"
                                        className="w-100 h-100 object-fit-cover"
                                    />
                                ) : (
                                    <FaUserCircle className="fs-2 text-secondary" />
                                )}
                            </div>

                            <h6 onClick={handleClick} style={{ cursor: "pointer" }} className="mb-0">
                                {userInfo?.firstName} {userInfo?.lastName}
                            </h6>
                        </div>

                        {/* Dropdown */}
                        <div className="dropdown">
                            <button className="btn border-0 p-0" type="button" data-bs-toggle="dropdown">
                                <SlOptionsVertical className="fs-5" />
                            </button>

                            <ul className="dropdown-menu dropdown-menu-end shadow rounded-4 p-3 profile-dropdown">
                                <li>
                                    <button onClick={handleClick} className="dropdown-item d-flex align-items-center gap-3 rounded-3 fs-6 py-2">
                                        <FaUser className="fs-5" />
                                        Profile
                                    </button>
                                </li>

                                <li>
                                    <button className="dropdown-item d-flex align-items-center gap-3 rounded-3 fs-6 py-2">
                                        <FaBox className="fs-5" />
                                        My Orders
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
                                    <button onClick={handleLogout}
                                        className="dropdown-item d-flex align-items-center gap-3 rounded-3 fs-6 py-2 text-danger"
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

            {search.trim() !== "" && allProduct.filter((product) =>
                product.title.toLowerCase().includes(search.toLowerCase())).length === 0 && (
                    <div>
                        <div className="p-4 text-center">
                            <div className="mb-2 fs-3 text-muted opacity-50">🔍</div>
                            <h5 className="fw-normal text-dark mb-1 fs-5">No Results Found</h5>
                        </div>
                    </div>
                )
            }

            <div className="container mt-3 dashboard-wrapper">
                <Outlet />
            </div>
        </>
    );
}
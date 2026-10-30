import './Home.css'
import rightImage from "./assets/right-image.webp";
import { NavLink, Outlet, useLocation } from 'react-router-dom';



function Home() {

    const location = useLocation();

    return (
        <>
            <div className="container">
                <div className="left">
                    {location.pathname !== "/login" &&
                        location.pathname !== "/forgetpassword" &&
                        location.pathname !== "/signup" && (
                            <div>
                                <nav>
                                    <NavLink to="/login" style={navLinkStyle}>
                                        Login
                                    </NavLink>
                                </nav>
                            </div>
                        )}

                    <Outlet />
                </div>

                <div className="right">
                    <div style={{ margin: "20px" }}>
                        <h2 className="text-white mt-5 fs-4">
                            # Tailwind CSS Admin Dashboard Template
                        </h2>
                        <p style={{ color: "rgb(194 214 255)", fontSize: "14px" }}>Available in HTML, React, Next.js, Vue, Angular and Laravel.</p>
                    </div>

                    <div>
                        <img src={rightImage} className="img-fluid" alt="right image" />
                    </div>
                </div>
            </div>
        </>
    )
}
export default Home;

//-----------------------------------

export const navLinkStyle = ({ isActive }) => ({
    color: isActive ? '#007bff' : '#333',
    textDecoration: isActive ? 'none' : 'underline',
    fontWeight: isActive ? 'bold' : 'normal',
    padding: '5px 10px'
});
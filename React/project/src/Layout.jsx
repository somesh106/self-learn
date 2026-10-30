import { Outlet } from "react-router-dom";
import Image from "./Image";
import "./Login.css";

function Layout() {
  return (
    <div className="container">
      
      {/* Left side image */}
      <div className="left">
        <Image />
      </div>

      {/* Right side pages */}
      <div className="right">
        <Outlet />
      </div>

    </div>
  );
}

export default Layout;
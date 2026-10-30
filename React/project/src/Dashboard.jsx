import Nav from 'react-bootstrap/Nav';
import { NavLink, Routes, Route, Outlet, useNavigate } from 'react-router-dom';
import './Dashboard.css'
import Newsfeed from './Newsfeed';
import Profile from './Profile';
import Contact from './Contact'
import Settings from './Settings'


function Dashboard() {

    const navigate = useNavigate();

    function handleLogout() {
        navigate("/login");
        // alert('Logout Button works.');
    }

    return (
        <div>
            <ul>
                <li>
                    {/* <button>Nav</button> */}
                </li>
                <li>
                    <nav>
                        <NavLink to="/dashboard/newsfeed" style={{ color: "black" }}>
                            NewsFeed
                        </NavLink>
                    </nav>
                </li>
                <li>
                    <nav>
                        <NavLink to="/dashboard/profile" style={{ color: "black" }}>
                            Profile
                        </NavLink>
                    </nav>
                </li>
                <li>
                    <nav>
                        <NavLink to="/dashboard/contact" style={{ color: "black" }}>
                            Contact
                        </NavLink>
                    </nav>
                </li>
                <li>
                    <nav>
                        <NavLink to="/dashboard/settings" style={{ color: "black" }}>
                            Settings
                        </NavLink>
                    </nav>
                </li>
                <button className='logout-btn' onClick={handleLogout}>Logout</button>
            </ul>
            <div>
                <Outlet />
            </div>
            <div>
            </div>
        </div>

    )
}
export default Dashboard;


//------------------------------

//Extra Ordinary code-

// function MyNav() {
//         const location = useLocation();

//         return (
//             <nav>
//                 <Nav variant="pills" activeKey={location.pathname}>
//                     <Nav.Item>
//                         <Nav.Link as={NavLink} to="/dashboard/newsfeed" eventKey="newsfeed">News Feed</Nav.Link>
//                     </Nav.Item>
//                     <Nav.Item>
//                         <Nav.Link as={NavLink} to="/dashboard/profile" eventKey="profile">Profile</Nav.Link>
//                     </Nav.Item>
//                     <Nav.Item>
//                         <Nav.Link as={NavLink} to="/dashboard/settings" eventKey="settings">Settings</Nav.Link>
//                     </Nav.Item>

//                     <Nav.Item>
//                         <Nav.Link eventKey="disabled" disabled>Disabled</Nav.Link>
//                     </Nav.Item>

//                     <Nav.Item style={{ marginLeft: "auto" }}>
//                         <Nav.Link as={NavLink} to="/dashboard/contact" eventKey="contact">Contact</Nav.Link>
//                     </Nav.Item>
//                     <Nav.Item>
//                         <Nav.Link as={NavLink} to="/dashboard/logout" eventKey="logout">Logout</Nav.Link>
//                     </Nav.Item>
//                 </Nav>
//             </nav>
//         );
//     }
//     return <MyNav />;
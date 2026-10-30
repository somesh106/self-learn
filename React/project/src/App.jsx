import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Signup from "./Signup";
import ForgetPassword from "./ForgetPassword";
import Dashboard from "./Dashboard";
import Newsfeed from "./Newsfeed";
import Profile from "./Profile";
import Settings from "./Settings";
import Contact from "./Contact";
import 'bootstrap/dist/css/bootstrap.min.css';
import Input from './Input'


//Main Code for Parent-Child Layout Routing

function App() {
  return (
    <div>
      <Routes>

        {/* Parent route */}
        <Route path="/" element={<Home />}>

          {/* Child routes */}
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="forgetpassword" element={<ForgetPassword />} />
        </Route>

        {/* //Dashboard Parent - Child Routing */}
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="newsfeed" element={<Newsfeed />} />
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </div>
  );
}
export default App;

// ------------------------------------------------------------
// <div>
//       <Routes>

//         {/* Parent route */}
//         <Route path="/" element={<Home />}>

//           {/* Child routes */}
//           <Route path="login" element={<Login />} />
//           <Route path="signup" element={<Signup />} />
//           <Route path="forgetpassword" element={<ForgetPassword />} />
//         </Route>

//         {/* Login Parent  If want to make Login home page */}
//         {/* <Route path="/" element={<Login />} />
//       <Route path="/signup" element={<Signup />} />
//       <Route path="/forgetpassword" element={<ForgetPassword />} /> */}


//         {/* //Dashboard Parent - Child Routing */}
//         <Route path="/dashboard" element={<Dashboard />}>
//           <Route path="newsfeed" element={<Newsfeed />} />
//           <Route path="profile" element={<Profile />} />
//           <Route path="settings" element={<Settings />} />
//           <Route path="contact" element={<Contact />} />
//         </Route>
//       </Routes>
//     </div>
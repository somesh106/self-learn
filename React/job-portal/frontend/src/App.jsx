import './App.css'
import { AppRoutes } from './routes/appRoutes';
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


// import "react-loading-skeleton/dist/skeleton.css";

function App() {

  return (
    <>
      <AppRoutes />
      <ToastContainer
        position="top-center"
        autoClose={1000}
        toastStyle={{ width: "500px" }}
      />
    </>
  )

}
export default App;
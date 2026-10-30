import './App.css'
import AppRoutes from './routes/appRoutes'
import "bootstrap-icons/font/bootstrap-icons.css";
import { CommonProvider } from './context/commonContex';
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-loading-skeleton/dist/skeleton.css";

function App() {

  return (
    <>
      <CommonProvider>
        <AppRoutes />
      </CommonProvider>
    </>
  )
}

export default App

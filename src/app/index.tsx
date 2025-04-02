import { StrictMode } from "react";
import AppRouter from "./routes/router";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const App = () => {
    return (
        <StrictMode>
        <AppRouter />
        <ToastContainer position="bottom-center" autoClose={3000} />
        </StrictMode>


    );
  };

  export default App;
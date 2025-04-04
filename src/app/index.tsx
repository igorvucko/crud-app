import AppRouter from "./routes/router";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { Layout } from "antd";
import Header from "../components/Header";

const App = () => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header />
      <Layout.Content style={{ padding: "30px" }}>
        <AppRouter />
      </Layout.Content>
      <ToastContainer position="bottom-center" autoClose={3000} />
    </Layout>
  );
};

export default App;
import { Layout, Menu } from "antd";
import { useNavigate, useLocation } from "react-router-dom";
import { logout } from "../features/auth/utils/auth";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleMenuClick = ({ key }: { key: string }) => {
    if (key === "logout") {
      logout();
      navigate("/login");
    } else {
      navigate(key);
    }
  };

  if (location.pathname === "/login") return null;

  return (
    <Layout.Header>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={[location.pathname]}
        onClick={handleMenuClick}
        items={[
          { key: "logout", label: "Odjava" },
        ]}
      />
    </Layout.Header>
  );
};

export default Header;

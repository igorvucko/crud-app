import { useNavigate } from "react-router-dom";
import Userlogin from "./components/UsersLogin";
import { dummyUser } from "./utils/dummyUser";
import { toast } from 'react-toastify';

const LoginContainer = () => {
  const navigate = useNavigate();

  const handleLogin = (email: string, password: string) => {
if (email === dummyUser.email && password === dummyUser.password) {
      localStorage.setItem("authUser", JSON.stringify(dummyUser));
      toast.success(`${dummyUser.name} dobrodošao u aplikaciju !`);
      navigate("/");
    } else {
      toast.error("Neispravni podaci. Pokušajte ponovno.");
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: "100px auto" }}>
      <h2>Login</h2>
      <Userlogin onLogin={handleLogin} />
    </div>
  );
};

export default LoginContainer;
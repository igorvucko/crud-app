import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UsersContainer from "../../features/users/UsersContainer";

const AppRouter = () => {
    return (
      <Router>

            <Routes>
              <Route path="/"element={<UsersContainer />} />

            </Routes>

      </Router>
    );
  };

  export default AppRouter;
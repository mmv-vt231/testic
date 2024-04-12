import { Route, Routes } from "react-router-dom";

import RootLayout from "./layouts/RootLayout";
import AuthLayout from "./layouts/AuthLayout";
import Authorization from "./layouts/Authorization";
import PanelLayout from "./layouts/PanelLayout";

import Home from "@/pages/Home";
import Login from "@pages/auth/Login";
import Register from "@pages/auth/Register";
import NotFound from "@pages/errors/NotFound";
import Groups from "@pages/groups/Groups";
import Group from "@pages/groups/Group";

function App() {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="auth" element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
        <Route element={<Authorization />}>
          <Route path="panel" element={<PanelLayout />}>
            <Route path="groups">
              <Route index element={<Groups />} />
              <Route path=":id" element={<Group />} />
            </Route>
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;

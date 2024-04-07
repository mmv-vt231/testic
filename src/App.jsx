import { Route, Routes } from "react-router-dom";

import RootLayout from "./layouts/RootLayout";
import Home from "@/pages/Home";
import AuthLayout from "./layouts/AuthLayout";
import Login from "@pages/Auth/Login";
import Register from "@pages/Auth/Register";
import Authorization from "./layouts/Authorization";
import PanelLayout from "./layouts/PanelLayout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="auth" element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
        <Route path="panel" element={<Authorization />}>
          <Route index element={<PanelLayout />}></Route>
        </Route>
      </Route>
    </Routes>
  );
}

export default App;

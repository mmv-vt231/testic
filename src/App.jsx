import React from "react";
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
import Profile from "@pages/profile/Profile";
import Topics from "@pages/topics/Topics";
import Topic from "@pages/topics/Topic";
import TopicTests from "@pages/topics/TopicTests";
import TopicTasks from "@pages/topics/TopicTasks";
import Test from "@pages/test/Test";
import Task from "@pages/task/Task";
import Start from "@pages/testing/Start";
import Passing from "@pages/testing/Passing";
import Result from "@pages/testing/Result";

function App() {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="auth" element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
        <Route path="test">
          <Route path="start/:id" element={<Start />} />
          <Route path="passing/:id" element={<Passing />} />
          <Route path="result/:id" element={<Result />} />
        </Route>
        <Route element={<Authorization />}>
          <Route path="panel" element={<PanelLayout />}>
            <Route path="tests/:id" element={<Test />} />
            <Route path="topics">
              <Route index element={<Topics />} />
              <Route path=":id" element={<Topic />}>
                <Route index element={<TopicTests />} />
                <Route path="tasks" element={<TopicTasks />} />
              </Route>
            </Route>
            <Route path="tasks/:id" element={<Task />} />
            <Route path="groups">
              <Route index element={<Groups />} />
              <Route path=":id" element={<Group />} />
            </Route>
            <Route path="profile" element={<Profile />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;

import { Stack } from "@chakra-ui/react";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Sidebar from "../Components/Sidebar";
import Editpage from "./Editpage";
import Homepage from "./Homepage";
import Login from "./Login";

const MainRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Stack direction="row">
            <Sidebar />
            <Homepage />
          </Stack>
        }
      />
      <Route
        path="/task/:id"
        element={
          <Stack direction="row">
            <Sidebar />
            <Editpage />
          </Stack>
        }
      />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default MainRoutes;

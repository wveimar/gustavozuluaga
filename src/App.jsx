import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/common/Layout";
import Home from "./pages/home/Home";
import Page from "./pages/page/Page";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/home" exact element={<Home />} />
        <Route path="/page" exact element={<Page />} />
      </Routes>
    </Layout>
  );
}

export default App;

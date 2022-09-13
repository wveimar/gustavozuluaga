import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/common/Layout";
import Home from "./pages/home/Home";
import Page from "./pages/page/Page";
import PageEsmeralda from "./pages/page-esmeralda/PageEsmeralda";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/home" exact element={<Home />} />
        <Route path="/page" exact element={<Page />} />
        <Route path="/comunidad-nueva-esmeralda" element={<PageEsmeralda />} />
      </Routes>
    </Layout>
  );
}

export default App;

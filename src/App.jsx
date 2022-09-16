import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/common/Layout";
import Home from "./pages/home/Home";
import Page from "./pages/page/Page";
import PostDetail from "./pages/post-detail/PostDetail";
import PageEsmeralda from "./pages/page-esmeralda/PageEsmeralda";
import { PAGE_CODES } from "./utils/page-codes";
import PageCabildoCapiul from "./pages/page-cabildo-capiul/PageCabildoCapiul";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/home" exact element={<Home />} />
        <Route path="/page" exact element={<Page />} />
        <Route path="/post" exact element={<PostDetail />} />
        <Route path={`/${PAGE_CODES.COMUNIDAD_NUEVA_ESMERALDA}`} element={<PageEsmeralda pageCode={PAGE_CODES.COMUNIDAD_NUEVA_ESMERALDA} />} />
        <Route path={`/${PAGE_CODES.CABILDO_CAPIUL}`} element={<PageCabildoCapiul pageCode={PAGE_CODES.CABILDO_CAPIUL} />} />
      </Routes>
    </Layout>
  );
}

export default App;

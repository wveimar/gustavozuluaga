import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/common/Layout";
import Home from "./pages/home/Home";
import Page from "./pages/page/Page";
import PostDetail from "./pages/post-detail/PostDetail";
import PageEsmeralda from "./pages/page-esmeralda/PageEsmeralda";
import { PAGE_CODES } from "./utils/page-codes";
import PageCabildoCapiul from "./pages/page-cabildo-capiul/PageCabildoCapiul";
import PageKaviari from "./pages/page-kaviari/PageKaviari";
import PagePuinave from "./pages/page-puinave/PagePuinave";
import PageNukak from "./pages/page-nukak/PageNukak";
import PageJiw from "./pages/page-jiw/pageJiw"

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" exact element={<Page pageCode="institucional"/>} />
        <Route path="/page" exact element={<Page />} />
        <Route path="/post" exact element={<PostDetail />} />
        <Route path={`/${PAGE_CODES.COMUNIDAD_NUEVA_ESMERALDA}`} element={<PageEsmeralda pageCode={PAGE_CODES.COMUNIDAD_NUEVA_ESMERALDA} />} />
        <Route path={`/${PAGE_CODES.CABILDO_CAPIUL}`} element={<PageCabildoCapiul pageCode={PAGE_CODES.CABILDO_CAPIUL} />} />
        <Route path={`/${PAGE_CODES.KAVIARI}`} element={<PageKaviari pageCode={PAGE_CODES.KAVIARI} />} />
        <Route path={`/${PAGE_CODES.PUINAVE}`} element={<PagePuinave pageCode={PAGE_CODES.PUINAVE} />} />
        <Route path={`/${PAGE_CODES.NUKAK}`} element={<PageNukak pageCode={PAGE_CODES.NUKAK} />} />
        <Route path={`/${PAGE_CODES.JIW}`} element={<PageJiw pageCode={PAGE_CODES.JIW} />} />
      </Routes>
    </Layout>
  );
}

export default App;

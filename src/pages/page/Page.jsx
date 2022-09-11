import React from "react";
import {useLocation} from "react-router-dom";
import SimplePageContentful from "../../components/simple-page-contentful/SimplePageContentful";
const Page = () => {
  const search = useLocation().search;
  const code = new URLSearchParams(search).get('code');
  return <div><SimplePageContentful code={code}></SimplePageContentful></div>;
};

export default Page;

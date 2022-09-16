import React from "react";
import {useLocation} from "react-router-dom";
import SimplePage from "../../components/simple-page/SimplePage";
const Page = () => {
  const search = useLocation().search;
  const code = new URLSearchParams(search).get('code');
  return <div><SimplePage code={code}></SimplePage></div>;
};

export default Page;

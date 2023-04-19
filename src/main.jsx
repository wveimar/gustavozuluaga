import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client";
import App from "./App";
import "./index.css";
import { setContext } from "@apollo/client/link/context";

const ACCESS_TOKEN = "518B-kRRcc301bgW9dGrHpgY9eSCBGufp8goCh7EvX8";
const SPACE_ID = "etnyvhabihji";

const httpLink = createHttpLink({
  uri: `https://graphql.contentful.com/content/v1/spaces/${SPACE_ID}/environments/master`,
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: ACCESS_TOKEN ? `Bearer ${ACCESS_TOKEN}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>
);

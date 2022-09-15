import React, { useState } from "react";
import { Link } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";
import "./navBar.css";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const { error, data } = useQuery(MENU_NAVIGATIONS_QUERY);
  if (error && error.networkError) {
    return <p>Error: {error.networkError.result.errors[0].message}</p>;
  }
  if (!data) {
    return <p>No Data!</p>;
  }

  const { items } = data.menuNavigationCollection;

  return (
    <nav role="navigation" className="Navbar" aria-label="Main">
      <Link to="/" className="nav-logo">
        <img className="logo" src="/images/logoMenu.png"/>
      </Link>
      <ul className={`nav-items ${isOpen && "open"}`}>
        {items &&
          items.map((item, index) => (
            <Link
              className="nav-link"
              key={index}
              to={
                item.menuType === "SimplePageLink"
                  ? `/page?code=${item.menuPath}`
                  : item.menuPath
              }
            >
              {item.name}
            </Link>
          ))}
      </ul>
      <div className="nav-toggle" onClick={() => setIsOpen(!isOpen)}>
        <div className="bar"></div>
      </div>
    </nav>
  );
}

const MENU_NAVIGATIONS_QUERY = gql`
  query {
    menuNavigationCollection {
      items {
        code
        name
        menuPath
        menuType
      }
    }
  }
`;

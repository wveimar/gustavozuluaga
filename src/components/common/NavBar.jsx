import React from "react";
import { Link } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";
import * as styles from './nav-bar.module.css'

export default function NavBar() {
  const { error, data } = useQuery(MENU_NAVIGATIONS_QUERY);
  if (error && error.networkError) {
    return <p>Error: {error.networkError.result.errors[0].message}</p>;
  }
  if (!data) {
    return <p>No Data!</p>;
  }

  const {items} = data.menuNavigationCollection;
  
  const menuOptions = (menu) => {
    return (
      menu &&
      menu.map((item) => (
        <Link
          className={styles.navigationItem}
          activeClassName="active"
          to={`/page?code=${item.menuPath}`}
        >
          {item.name}
        </Link>
      ))
    )
  }
  return (
    <nav role="navigation" className={styles.container} aria-label="Main">
      <Link to="/" className={styles.logoLink}>
        <img className={styles.logo} src="/images/logoMenu.png" />
      </Link>
      <ul className={styles.navigation}>{menuOptions(items)}</ul>
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
      }
    }
  }
`;

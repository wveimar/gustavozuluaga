import NavBar from "./NavBar";
import Footer from "./Footer";
import "./variables.css";
import "./global.css";
import * as styles from "./nav-bar.module.css";

const Layout = ({ children }) => {
  return (
    <div>
      {/* <Seo /> */}
      <header className={styles.header}>
        <NavBar />
      </header>
      <main style={{ paddingTop: "100px" }}>{children}</main>
      <Footer />
    </div>
  );
};
export default Layout;

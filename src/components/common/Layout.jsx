import NavBar from "../nav-bar/NavBar";
import Footer from "../footer/Footer";
import "./variables.css";
import "./global.css";

const Layout = ({ children }) => {
  return (
    <div>
      <header>
        <NavBar />
      </header>
            <main style={{ paddingTop: "100px" }}>{children}</main>
      <Footer />
    </div>
  );
};
export default Layout;

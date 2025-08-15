import { Outlet } from "react-router-dom";
import NavigationBar from "../components/homepage-components/NavigationBar";

const Layout = () => {
  return (
    <>
      <NavigationBar />
      <main style={{ padding: "1rem" }}>
        <Outlet /> {/* Page content will render here */}
      </main>
    </>
  );
}

export default Layout;
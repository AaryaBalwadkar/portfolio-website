import { Outlet } from "react-router-dom";
import NavigationBar from "../components/homepage-components/NavigationBar";

const Layout = () => {
  return (
    <>
      <NavigationBar />
      <main style={{ padding: "1rem" }}>
        <Outlet /> {/* Page content will render here */}
      </main>

      <footer className="py-4 bg-white text-center text-gray-500 text-sm border-t">
        © {new Date().getFullYear()} Aarya Balwadkar. All rights reserved.
      </footer>
    </>
  );
}

export default Layout;
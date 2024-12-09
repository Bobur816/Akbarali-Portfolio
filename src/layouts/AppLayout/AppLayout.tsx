import { Outlet } from "react-router-dom";
import Sidebar from "../../UI/Sidebar";
import Footer from "../../UI/Footer/Footer";

function AppLayout() {
  return (
    <div className="app-layout">
      <Sidebar />
      <main className="main">
        <Outlet />
        <Footer />
      </main>
    </div>
  );
}

export default AppLayout;

import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";
const RootLayout = () => {
  return (
    <>
      <div className="flex gap-5 w-full px-4 bg-[#F4F9FD] relative ">
        <div className="fixed top-0 left-0">
          <Sidebar />
        </div>
        <div className="qolgan ml-[250px]">
          <Header />
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default RootLayout;

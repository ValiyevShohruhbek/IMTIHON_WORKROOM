import { Link } from "react-router-dom";
import "../assets/styles/sidebar.css";
import Icon from "./ui/Icon";
import LinkItem from "./ui/LinkItem";
import { FiMessageCircle } from "react-icons/fi";
import { MdLogin } from "react-icons/md";

const SideBar = () => {
  const navArr = [
    { adress: "#", navigation: "Dashboard", icon: Icon.dashboardIcon },
    { adress: "#", navigation: "Projects", icon: Icon.projectsIcon },
    { adress: "#", navigation: "Calendar", icon: Icon.calendarIcon },
    { adress: "#", navigation: "Vacations", icon: Icon.vacationsIcon },
    { adress: "#", navigation: "Employees", icon: Icon.employeesIcon },
    { adress: "#", navigation: "Messenger", icon: Icon.messengerIcon },
    { adress: "#", navigation: "Info Portal", icon: Icon.infoIcon },
  ];
  return (
    <aside className="w-[200px] bg-[#FFFFFF] m-5 rounded-3xl aside">
      <div className="mt-7 pl-4 w-full flex flex-col justify-around">
        <div className="flex flex-col items-start gap-3">
          {Icon.companyBlueLogo("sticky top-0 left-0")}
          <div className="flex flex-col justify-between w-[100%] h-[280px]">
            {navArr.map((item) => (
              <LinkItem
                adress={item.adress}
                icon={item.icon}
                navigation={item.navigation}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col items-center gap-7">
          <div className="w-[168px] h-[168px] relative rounded-[24px] bg-[#3F8CFF]/10 mt-[75px]">
            {Icon.illustration(
              "!opacity-[100%] absolute top--1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            )}
            <button className="bg-[#3F8CFF] flex items-center justify-around px-5 w-[129px] absolute bottom-6 h-[48px] left-5 rounded-xl">
              <FiMessageCircle className="size-5 text-[white]" />
              <h1 className="font-[700] text-[16px] text-[white]">Support</h1>
            </button>
          </div>
          <Link
            to="/"
            className="text-[#7D8592] flex items-center gap-4 text-[16px]"
          >
            <MdLogin />
            <h1>Logout</h1>
          </Link>
        </div>
      </div>
    </aside>
  );
};

export default SideBar;

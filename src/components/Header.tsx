import { FaAngleDown } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { LuBell } from "react-icons/lu";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const goToProfile = () => {
    navigate("profile");
  };
  return (
    <div className="header mt-3 flex items-center justify-between w-full px-4 bg-[white] rounded-[24px]">
      <div className="flex items-center gap-1 w-[512px] h-[48px] py-2 px-2">
        <IoSearch className="size-4" />
        <input
          type="text"
          className="border-0 outline-0 w-full"
          placeholder="Search"
        />
      </div>
      <button
        onClick={goToProfile}
        className="flex items-center gap-5 cursor-pointer"
      >
        <LuBell className="size-4" />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_qelUF9GcbOcMAl2BClvW_rIwsSK3I-eKoQ&s"
          alt=""
          className="w-[35px] h-[35px] rounded-[100%]"
        />
        <h2 className="text-[20px] font-bold">Evan Yates</h2>
        <select name="" id="">
          <FaAngleDown />
        </select>
      </button>
    </div>
  );
};

export default Header;

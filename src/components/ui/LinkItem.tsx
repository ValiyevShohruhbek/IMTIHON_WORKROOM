import type { JSX } from "react";
import { Link } from "react-router-dom";

interface Props {
  icon: (className: string) => JSX.Element;
  navigation: string;
  adress: string;
}

const LinkItem = ({ icon, navigation, adress }: Props) => {
  return (
    <div className="flex w-full items-center justify-between group">
      <Link
        to={adress}
        className="w-[172px] h-[35px] rounded-xl bg-transparent group-hover:bg-[#ebf3ff] text-[#3F8CFF] flex items-center gap-4 pl-2 transition-colors"
      >
        {icon("ml-[11px]")} <h1>{navigation}</h1>
      </Link>
      <span className="h-[35px] w-[4px] rounded-[2px] bg-[#3F8CFF] opacity-0 group-hover:opacity-100 transition-opacity"></span>
    </div>
  );
};

export default LinkItem;

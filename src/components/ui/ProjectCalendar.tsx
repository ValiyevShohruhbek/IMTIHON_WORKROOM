import { FaCalendar } from "react-icons/fa";


const ProjectCalendar = () => {
     return (
          <>
               <div className="flex items-center gap-x-1">
                    <FaCalendar className="text-[#7d8592] size-2.5" />
                    <span className="text-[#7d8592] text-[14px] font-[600]" >Created Sep 12, 2020</span>
               </div>
          </>
     )
}

export default ProjectCalendar
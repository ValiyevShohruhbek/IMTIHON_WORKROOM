import ProjectCardLevel from "../ui/ProjectCardLevel";
import ProjectCalendar from "./ProjectCalendar";
import ProjectCardAvatar from "./ProjectCardAvatar";
interface Props {
  allTasks: string;
  activeTasks: string;
  sana: string;
  projectName: string;
  imgUrl: string;
}

const ProjectCards = () => {
  return (
    <>
      <div className="w-[full] h-[148px] flex gap-2 border border-gray-300 rounded-[24px] bg-[white]">
        <div className="left flex flex-col gap-4 w-[50%] p-5">
          <div className="top flex items-center gap-4">
            <img
              src="https://alnahditravels.com/wp-content/uploads/2023/05/image25-2.jpg"
              className="w-[48px] h-[48px] rounded-[5px]"
              alt=""
            />
            <div className="flex flex-col items-center ">
              <span className="id font-[400] text-[14px] text-[#91929e]">
                PN0001265
              </span>
              <h2 className="content font-[700] text-[16px]">
                Medical App (iOS native)
              </h2>
            </div>
          </div>
          <div className="bottom flex items-center justify-between w-[80%]">
            <ProjectCalendar />
            <ProjectCardLevel content="Low" icon="down" />
          </div>
        </div>

        <div className="w-[3px] h-full bg-[#e4e6e8] rounded-[8px]"></div>

        <div className="right p-5">
          <div className="top">
            <h2 className="font-[700] text-[16px] px-3">Project Data</h2>
          </div>
          <div className="bottom flex items-center gap-4 px-3">
            <div className="">
              <span className="font-[400] text-[14px] text-[#91929e]">
                All tasks
              </span>
              <h5 className="font-[700] text-[16px] text-[#0a1629]">34</h5>
            </div>
            <div className="">
              <span className="font-[400] text-[14px] text-[#91929e]">
                Active tasks
              </span>
              <h5 className="font-[700] text-[16px] text-[#0a1629]">34</h5>
            </div>
            <div className="h-[39px]">
              <span className="font-[400] text-[14px] text-[#91929e] block">
                Assignes
              </span>
              <ProjectCardAvatar />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectCards;

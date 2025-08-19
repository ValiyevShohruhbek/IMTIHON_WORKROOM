import { MdNavigateNext } from "react-icons/md";
import ProjectCards from "../ui/Projects-card";

const Projects = () => {
  return (
    <>
      <div className="flex gap-x-20 justify-between w-full">
        <div className="projects mt-5 w-[90%] h-[570px]">
          <div className="flex items-center justify-between">
            <div className="font-[700] text-[22px]">Projects</div>
            <div className="flex items-center">
              <span className="font-[600] text-[16px] text-[#3f8cff]">
                View all
              </span>{" "}
              <MdNavigateNext className="size-3.5 text-[#3f8cff]" />
            </div>
          </div>

          <div className="mt-5 flex flex-col gap-2 ">
            <ProjectCards />
            <ProjectCards />
            <ProjectCards />
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;

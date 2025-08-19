import { MdNavigateNext } from "react-icons/md";
import ActivityStream from "../components/ui/ActivityStream";
import CalendarComponent from "../components/ui/calendar.components";
import Events from "../components/ui/Events";
import Projects from "../components/ui/Projects";
import WorkloadCard from "../components/ui/workload-card";
const DashboardPage = () => {
  return (
    <>
      <div className="mt-5">
        <div className="dashboard-header">
          <div className="">
            <h2 className="text-[16px] text-[#7d8592]">Welcome back ,Evan</h2>
          </div>

          <div className="flex items-center justify-between">
            <div className="">
              <h2 className="font-[700] text-[36px]">Dashboard</h2>
            </div>
            <CalendarComponent startDate="2020-11-16" endDate="2020-12-16" />
          </div>
        </div>

        <div className="flex gap-x-20 justify-between ">
          <div className="workload mt-5 w-[90%] h-[470px] bg-[white] rounded-[24px] p-4">
            <div className="flex items-center justify-between">
              <div className="font-[700] text-[22px]">Workload</div>
              <div className="flex items-center">
                <span className="font-[600] text-[16px] text-[#3f8cff]">
                  View all
                </span>{" "}
                <MdNavigateNext className="size-3.5 text-[#3f8cff]" />{" "}
              </div>
            </div>
            <div className="grid grid-cols-3 gap-5 mt-5 w-[95%]  pl-5  ">
              {Array.from({ length: 6 }).map((_, i) => (
                <WorkloadCard key={i} />
              ))}
            </div>
          </div>
          <div className="eventlar bg-[white] rounded-[24px] mt-3 ">
            <Events />
          </div>
        </div>

        <div className="flex  h-full   justify-between">
          <div className="w-[65%] h-full ">
            <Projects />
          </div>

          <div className="w-[30%]  min-h-full mt-5 ">
            <ActivityStream />
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardPage;

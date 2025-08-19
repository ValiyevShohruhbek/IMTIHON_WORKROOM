import { MdNavigateNext } from "react-icons/md";
import EventsCard from "../ui/EventsCard";
const Events = () => {
  return (
    <>
      <div className="events mt-5  h-[470px] w-[530px]">
        <div className="flex items-center justify-between">
          <div className="font-[700] text-[22px] px-4">Nearest Events</div>
          <div className="flex items-center">
            <span className="font-[600] text-[16px] text-[#3f8cff]">
              View all
            </span>{" "}
            <MdNavigateNext className="size-3.5 text-[#3f8cff]" />{" "}
          </div>
        </div>

        <div className="w-[90%] flex flex-col items-center mt-5 gap-3">
          <EventsCard
            content="Presentation of the new department"
            day="Today"
            hour="4h"
            icon="up"
            time="5:00 PM"
          />
          <EventsCard
            content="Anna’s Birthday"
            day="Today"
            hour="4h"
            icon="down"
            time="6:00 PM"
          />
          <EventsCard
            content="Ray Birthday"
            day="Today"
            hour="4h"
            icon="down"
            time="2:00 PM"
          />
        </div>
      </div>
    </>
  );
};

export default Events;

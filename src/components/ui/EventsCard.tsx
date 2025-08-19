import { FaArrowDownLong, FaArrowUp } from "react-icons/fa6";
import { MdAccessTimeFilled } from "react-icons/md";
interface Props {
  content: string;
  day: string;
  time: string;
  hour: string;
  icon: "up" | "down";
}

const EventsCard = (data: Props) => {
  const { content, day, hour, icon, time } = data;
  return (
    <>
      <div
        className={
          icon == "up"
            ? "event-card flex gap-x-5 "
            : "event-card-down flex gap-x-5 "
        }
      >
        <div className=" flex flex-col gap-y-2 mt-2 w-[340px] h-[104px]">
          <div className="flex items-center  justify-between">
            <div className="w-[185px] h-[45px]  font-[700] text-[16px]">
              {content}
            </div>
            <div className="">
              {icon == "up" ? (
                <FaArrowUp className="text-[yellow]" />
              ) : (
                <FaArrowDownLong className="text-[green]" />
              )}
            </div>
          </div>

          <div className="flex items-center gap-1 justify-between">
            <div className="timer w-[185px] h-[45px]  font-[400] text-[14px] text-[#aeafb7] flex items-center ">
              <span>
                {day} | {time}
              </span>
            </div>
            <div className="flex items-center gap-[3px]">
              <MdAccessTimeFilled className="size-3 text-[#aeafb7]" />
              <span className="font-[400] text-[14px] text-[#aeafb7]">
                {hour}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventsCard;

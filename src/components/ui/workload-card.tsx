export default function workloadCard() {
  return (
    <>
      <div className="flex  flex-col gap-1  w-[175px] h-[180px] items-center justify-center rounded-[24px] bg-[#e2ebf3]">
        <img
          className="border-2 border-[#3f8cff] rounded-[100%] w-[50px] h-[50px]"
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
          alt=""
        />
        <h2 className="font-[700] text-[16px]">Name</h2>
        <span className="font-[400] text-[14px]">Kasb</span>
        <div className="daraja border rounded-[4px] text-[#7d8592] w-fit text-[12px] p-[1px] border-[#7d8592]">
          Middle
        </div>
      </div>
    </>
  );
}

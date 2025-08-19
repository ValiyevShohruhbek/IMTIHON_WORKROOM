import { FaArrowDown, FaArrowUp } from "react-icons/fa";

interface Props {
     icon: 'up' | 'down'
     content: 'Medium' | 'Low'
}

const ProjectCardLevel = ({ icon, content }: Props) => {
     return (
          <>
               <div className="flex items-center gap-2">
                    {icon == 'up' ? <FaArrowUp className="size-3 text-[yellow]" /> : <FaArrowDown className="size-3 text-[green]" />}
                    <span className={content == "Medium" ? 'text-[14px] font-[700] text-[yellow]' : 'text-[14px] font-[700] text-[green]'}>{content}</span>
               </div>
          </>
     )
}

export default ProjectCardLevel
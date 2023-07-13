import { BiChevronRight } from "react-icons/bi";

export default function TodaySchedule() {
    return (
        <div className="flex flex-col md:w-[48%] w-full h-auto shrink-0 font-Montserrat justify-center items-center bg-white md:p-8 p-3 rounded-2xl gap-2.5">
            <div className="flex flex-row w-full justify-between items-center">
                <h3 className='text-black  text-lg font-bold'>Today's Schedule</h3>
                <button className=' flex flex-row text-xs text-gray-new font-normal  items-center'>
                    <p>See All</p>
                    <BiChevronRight className='h-5 w-5' />
                </button>
            </div>




        </div>
    )
}
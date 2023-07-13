
import { BiChevronDown } from "react-icons/bi";
import { PieChart, Pie, Cell, Tooltip } from 'recharts';

const data = [
    { name: 'Basic Tees', value: 55 },
    { name: 'Custom Short Pants', value: 31 },
    { name: 'Super Hoodies', value: 14 },
];

const COLORS = ['#98D89E', '#EE8484', '#F6DC7D'];


export default function TopProduct() {

    return (
        <div className="flex flex-col md:w-[48%] w-full h-auto shrink-0 font-Montserrat justify-center items-center bg-white md:p-8 p-3 rounded-2xl gap-2.5">
            <div className="flex flex-row w-full justify-between items-center">
                <h3 className='text-black  text-lg font-bold'>Top Products</h3>
                <button className=' flex flex-row text-xs text-gray-new font-normal items-center'>
                    <p>June - July 2023</p>
                    <BiChevronDown className='h-5 w-5'/>
                </button>
            </div>

            <div className="flex flex-row justify-between items-center md:w-[80%] w-full gap-2.5">

                <PieChart width={175} height={175}>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Tooltip />
                </PieChart>

                <div className="flex flex-col md:gap-5 gap-2.5">
                    <div className="flex flex-row gap-3 ">
                        <div className={`rounded-full h-[11px] w-[11px]  bg-[#98D89E] mt-1`}></div>
                        <div className="flex flex-col ">
                            <h4 className=' md:text-sm text-xs font-bold text-black'>{data[0].name}</h4>
                            <p className='font-Lota text-xs font-normal text-gray-new'>{data[0].value}%</p>
                        </div>
                    </div>
                    <div className="flex flex-row gap-3">
                        <div className="rounded-full h-[11px] w-[11px]  bg-[#EE8484] mt-1"></div>
                        <div className="flex flex-col ">
                            <h4 className=' md:text-sm text-xs font-bold text-black'>{data[1].name}</h4>
                            <p className='font-Lota text-xs font-normal text-gray-new'>{data[1].value}%</p>
                        </div>
                    </div>
                    <div className="flex flex-row gap-3">
                        <div className={`rounded-full h-[11px] w-[11px]  bg-[#F6DC7D] mt-1`}></div>
                        <div className="flex flex-col ">
                            <h4 className=' md:text-sm text-xs font-bold text-black'>{data[2].name}</h4>
                            <p className='font-Lota text-xs font-normal text-gray-new'>{data[2].value}%</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}












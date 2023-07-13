import { BiChevronDown } from "react-icons/bi";
import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: '',
        uv: 100,
        pv: 200,
    },
    {
        name: 'Week 1',
        uv: 390,
        pv: 350,
    },
    {
        name: 'Week 2',
        uv: 120,
        pv: 140,
    },
    {
        name: 'Week 3',
        uv: 350,
        pv: 380,
    },
    {
        name: 'Week 4',
        uv: 250,
        pv: 375,
    },

];

export default function Activities() {
    return (
        <div className="flex flex-col h-auto shrink-0  bg-white md:p-8 p-3 rounded-2xl gap-2.5">
            <h1 className="text-black font-Montserrat text-lg font-bold">Activities</h1>
            <div className="flex flex-row items-center justify-between">
                <button className=' flex flex-row text-xs text-gray-new font-normal  items-center'>
                    <p>June - July 2023</p>
                    <BiChevronDown className='h-5 w-5' />
                </button>

                <div className="flex flex-row">hare krishna</div>
            </div>
            {/* <ResponsiveContainer width="100%" height="100%"> */}
                <LineChart
                    width={750}
                    height={250}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="0 -1" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    {/* <Legend /> */}
                    <Line type="monotone" dataKey="pv" stroke="#8884d8"  />
                    <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                </LineChart>
            {/* </ResponsiveContainer> */}
        </div>
    )
}







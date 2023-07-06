import { FiPieChart } from "react-icons/fi";
import { BsTags } from "react-icons/bs";
import { TbCalendarTime, TbUserCircle, TbSettings } from "react-icons/tb";
import Link from "next/link";

export default function NavBar({ className }) {
    return (
        <div className={` flex-col text-white bg-black shrink-0 rounded-4xl font-Montserrat p-10 justify-between ${className}`}>
            <div className="flex flex-col gap-12">
                <h1 className="flex text-4xl font-bold">Board.</h1>

                <div className="flex flex-col text-lg font-normal items-start gap-6">
                    <button className="nav-btn">
                        <FiPieChart className="h-4.5 w-4.5" />
                        <p>Dashboard</p>
                    </button>
                    <button className="nav-btn">
                        <BsTags className="h-4.5 w-4.5" />
                        <p>Transactions</p>
                    </button>
                    <button className="nav-btn">
                        <TbCalendarTime className="h-4.5 w-4.5" />
                        <p>Schedules</p>
                    </button>
                    <button className="nav-btn">
                        <TbUserCircle className="h-4.5 w-4.5" />
                        <p>Users</p>
                    </button>
                    <button className="nav-btn">
                        <TbSettings className="h-4.5 w-4.5" />
                        <p>Settings</p>
                    </button>
                </div>
            </div>
            <div className="flex flex-col text-sm  gap-3 font-light">
                <Link href='#'>Help</Link>
                <Link href='#'>Contact Us</Link>
            </div>

        </div>
    );
}
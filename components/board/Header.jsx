import { CiSearch } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
// import Profile from "./Profile";
import Profile from "../Profile";

export default function Header({ className }) {
    return (
        <div className={`flex flex-row items-center justify-between h-7.5 ${className}`}>
            <h2 className="text-black font-Montserrat md:text-2xl text-lg font-bold">Dashboard</h2>
            <div className="flex flex-row gap-5 items-center">
                <span className="hidden md:flex items-center relative rounded-lg h-7.5 w-44 shrink-0 bg-white text-sm ">
                    <input
                        className=" placeholder:text-grey-light  placeholder:text-sm placeholder:font-Lato focus:outline-none  w-40 px-3 "
                        type="text"
                        placeholder="Search..."

                    />
                    <button className="absolute right-3" htmlFor="search"><CiSearch className="w-3 h-3 text-grey-light2" /></button>
                </span>
                <IoIosNotificationsOutline className="hidden md:block h-7 w-7 text-black"/>
                <Profile />
            </div>
        </div>
    );
}
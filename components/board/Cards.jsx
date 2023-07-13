import { FcMoneyTransfer } from "react-icons/fc";
import { BsTags } from "react-icons/bs";
import { BiLike } from "react-icons/bi";
import { GoPeople } from "react-icons/go";

export default function Cards() {
    const revenue = (2129430).toLocaleString("en-US", { style: "currency", currency: "USD" })
    const transactions = (1520).toLocaleString("en-US")
    const likes = (9721).toLocaleString("en-US")
    const users = (892).toLocaleString("en-US")


    return (
        <div className="grid md:grid-rows-1 grid-rows-2 grid-flow-col gap-5 justify-between">

            <div className={`card_div bg-[#DDEFE0]`}>
                <div className="flex flex-col h-full  md:m-5 m-3">
                    <FcMoneyTransfer className="card_icon" />
                    <div className="flex flex-col items-start md:bottom-5 bottom-3 absolute">
                        <p className="card_p">Total Revenues</p>
                        <h3 className="card_h3">{revenue}</h3>
                    </div>
                </div>
            </div>

            <div className={`card_div bg-[#F4ECDD]`}>
                <div className="flex flex-col h-full  md:m-5 m-3 ">
                    <BsTags className="card_icon" />
                    <div className="flex flex-col items-start md:bottom-5 bottom-3 absolute">
                        <p className="card_p">Total Transactions</p>
                        <h3 className="card_h3">{likes}</h3>
                    </div>
                </div>
            </div>
            <div className={`card_div bg-[#EFDADA]`}>
                <div className="flex flex-col h-full  md:m-5 m-3 ">
                    <BiLike className="card_icon" />
                    <div className="flex flex-col items-start md:bottom-5 bottom-3 absolute">
                        <p className="card_p">Total Likes</p>
                        <h3 className="card_h3">{likes}</h3>
                    </div>
                </div>
            </div>
            <div className={`card_div bg-[#DEE0EF]`}>
                <div className="flex flex-col h-full  md:m-5 m-3 ">
                    <GoPeople className="card_icon" />
                    <div className="flex flex-col items-start md:bottom-5 bottom-3 absolute">
                        <p className="card_p">Total Users</p>
                        <h3 className="card_h3">{users}</h3>
                    </div>
                </div>
            </div>


        </div>
    )
}
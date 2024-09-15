import React, { useState } from "react";
import { FaCaretDown, FaUserFriends } from "react-icons/fa";
import { GoTag } from "react-icons/go";
import { IoMdMore, IoMdRefresh } from "react-icons/io";
import { MdCropSquare, MdInbox, MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import Messages from "./Messages";

const mailType = [
  {
    icon:<MdInbox size={"20px"}/>,
    text: "Primary"
  },
  {
    icon:<GoTag size={"20px"} />,
    text:"Promotions"
  },
  {
    icon:<FaUserFriends size={"20px"} />,
    text:"Social"
  }
]

function Inbox() {
  const [selectedType,setSelectedType] = useState(0);
  return (
    <div className="flex-1 bg-white rounded-xl mx-5">
      <div className="flex items-center justify-between px-4 ">
        <div className="flex items-center gap-2 text-gray-700 py-2 ">
          <div className="flex items-center gap-1 h-[40px] ">
            <MdCropSquare size={"24px"} className="hover:bg-gray-100 " />
            <FaCaretDown size={"14px"} className="hover:bg-gray-100  " />
          </div>
          <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer ">
            <IoMdRefresh size={"22px"} />
          </div>
          <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer ">
            <IoMdMore size={"22px"} />
          </div>
        </div>
        <div className="flex items-center gap-2">
              <p className="text-gray-500 text-xs mr-4">1-50 of 1000</p>
              <button className="hover:rounded-full hover:bg-gray-100"><MdKeyboardArrowLeft size={"20px"} /></button>
              <button className="hover:rounded-full hover:bg-gray-100"> <MdKeyboardArrowRight size={"20px"} /></button>
        </div> 
      </div>
      <div className="h-[90vh]  overflow-y-auto">
        <div className="flex items-center gap-1  "> 
          {
            mailType.map((item,idx) => {
              return (
                <button key={idx} onClick={() => setSelectedType(idx)}
                className={`${selectedType === idx ? 'border-b-4 border-b-blue-600 text-blue-600' : 'border-b-4 border-b-transparent'} flex items-center hover:bg-gray-100 gap-5 p-4`}>
                    {item.icon}
                    {item.text}
                </button>
              )
            })
          }
        </div>
        <Messages />
      </div>
    </div>
  );
}

export default Inbox;

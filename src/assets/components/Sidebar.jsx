import React, { useState } from "react";
import { IoMdStar } from "react-icons/io";
import { LuPencil } from "react-icons/lu";
import { MdOutlineDrafts, MdOutlineKeyboardArrowDown, MdOutlineWatchLater } from "react-icons/md";
import { TbSend2 } from "react-icons/tb";
import { useDispatch } from "react-redux";
import { setOpen } from "../../redux/AppSlice";

const sidebarItems = [
  {
    icon: <LuPencil />,
    text: "Inbox",
  },
  {
    icon: <IoMdStar />,
    text: "Starred",
  },
  {
    icon: <MdOutlineWatchLater />,
    text: "Snoozed",
  },
  {
    icon: <TbSend2 />,
    text: "Sent",
  },
  {
    icon: <MdOutlineDrafts />,
    text: "Drafts",
  },
  {
    icon:<MdOutlineKeyboardArrowDown />,
    text:"More"
  }
];

function Sidebar() {
  // const [open , setOpen] = useState(false);  // this is local state variable
  const[selected,setSelected] = useState(0);
  const dispatch = useDispatch();
  return (
    <div className="w-[15%]  h-screen overflow-hidden">
      <div className="bg-blue py-3 px-3 ">
        <button onClick={() => dispatch(setOpen(true))} className="flex items-center justify-center gap-2 p-4 rounded-2xl bg-[#C2E7FF] hover:shadow-md ">
          <LuPencil />
          Compose
        </button>
      </div>
      <div className="text-gray-500">
        {sidebarItems.map((item, index) => {
          return (
            <div
              onClick={() => setSelected(index)}
              key={index}
              className={`${selected === index ? `bg-[#D3E3FD] hover:bg-[#D3E3FD]` : null} flex items-center gap-4 pl-6 py-1 rounded-r-full hover:cursor-pointer my-2 hover:bg-gray-200`}
            >
              {item.icon}
              <p>{item.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Sidebar;

import React from "react";
import { MdCropSquare } from "react-icons/md";
import { RiStarLine } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {setSelectedEmail } from "../../redux/AppSlice";
import { motion } from "framer-motion";

function Message({email}) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  function openMail() {
    dispatch(setSelectedEmail(email));
    navigate(`/mail/${email.id}`);
  }

  return (
    <motion.div
      initial={{opacity:0,y:-20}}
      animate={{opacity:1,y:0}}
      transition={{duration:0.5}}
      onClick={openMail}
      className="flex items-center border-b border-gray-200 px-4 py-3 text-sm hover:cursor-pointer hover:shadow-md"
    >
      <div className="flex items-center gap-3 ">
        <div className="flex-none text-gray-300">
          <MdCropSquare className="h-5 w-5" />
        </div>
        <div className="flex-none text-gray-300">
          <RiStarLine className="h-5 w-5" />
        </div>
        <div className="font-semibold flex items-center">
          {email?.to}
        </div>
      </div>
      <div className="flex-1 ml-4">
        <p className="text-gray-600 truncate inline-block max-w-full ">
        {email?.message}
        </p>
      </div>
      <div className="flex-none text-gray-400 text-sm">{new Date(email?.createdAt?.seconds * 1000).toUTCString()}</div>
    </motion.div>
  );
}

export default Message;

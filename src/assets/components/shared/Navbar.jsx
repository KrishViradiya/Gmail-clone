import React, { useEffect, useState } from 'react'
import Avatar from 'react-avatar'

import { CiCircleQuestion, CiSettings } from 'react-icons/ci'
import { IoIosSearch } from 'react-icons/io'
import { PiDotsNineBold } from 'react-icons/pi'
import { RxHamburgerMenu } from 'react-icons/rx'
import { useDispatch, useSelector } from 'react-redux'
import { setSearchText, setUser } from '../../../redux/AppSlice'
import {motion, AnimatePresence } from 'framer-motion'
import { signOut } from 'firebase/auth'
import { auth } from '../../../Firebase'


function Navbar() {
  const[input,setInput] = useState("");
  const [toggle,setToggle] = useState(false);
  const dispatch = useDispatch();
  const {user} = useSelector(store => store.AppSlice)

  useEffect(() => {
    dispatch(setSearchText(input));
  }, [input])

  const signOutHandler = ( ) => {
    signOut(auth).then(() => {
      dispatch(setUser(null))
    }).catch((err)=> console.log(err))
  }

  return (
    <div className='flex items-center justify-between mx-3 h-16'>
           <div className="flex items-center gap-10">
              <div className="flex items-center gap-2"> 
                <div className="p-3 rounded-full hover:bg-gray-100 cursor-pointer">
                  <RxHamburgerMenu size={"20px"} />
                </div>
                <img className='w-8' src="data:image/png;base64,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" alt="" />
              <h1 className='text-2xl text-gray-500 font-medium'>Gmail </h1>
              </div>
              
           </div>
           <div className="md:block hidden w-[50%] mr-60"> 
                <div className="flex items-center bg-[#EAF1FB] px-2 py-3 rounded-full">
                  <IoIosSearch size={"24px"} className='text-gray-700 ' />
                  <input value={input} onChange={(e) => setInput(e.target.value) } className='w-full rounded-full bg-transparent outline-none px-2' placeholder='Search Mail' type="text" />
                </div>
              </div>
              <div className="md:block hidden">
                <div className="flex items-center gap-2">
                  <div className='p-3 rounded-full hover:bg-gray-100 cursor-pointer '>
                    <CiCircleQuestion size={"24px"} />
                  </div>
                  <div className='p-3 rounded-full hover:bg-gray-100 cursor-pointer'>
                    <CiSettings size={"24px"} />
                  </div>
                  <div className='p-3 rounded-full hover:bg-gray-100 cursor-pointer'>
                    <PiDotsNineBold size={"24px"} />
                  </div>
                  <div className='relative p-3 rounded-full hover:bg-gray-100 cursor-pointer'>
                    <Avatar onClick={() => setToggle(!toggle)} size={"24px"}  src={user.photoUrl} />
                    <AnimatePresence >
                       {
                        toggle && (
                          <motion.div
                          initial={{opacity:0,scale:0.8}}
                          animate={{opacity:1, scle:1}}
                          exit={{opacity:0,scale:0.8}}
                          transition={{duration:0.1}}
                          className='absolute right-3  z-20 shadow-lg bg-white rounded-md'
                          >
                            <button className='p-2 w-24  underline' onClick={signOutHandler}>SignOut</button>
                          </motion.div>
                        )
                       }
                    </AnimatePresence>
                  </div>
                </div>
              </div>
    </div>
  )
}

export default Navbar
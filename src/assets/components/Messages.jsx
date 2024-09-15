import React, { useEffect, useState } from 'react'
import Message from './Message'
import { collection,onSnapshot,orderBy,query } from 'firebase/firestore'
import { db } from '../../Firebase'
import { useDispatch, useSelector } from 'react-redux'
import { setEmails } from '../../redux/AppSlice'

function Messages() {

  
  const {searchText,emails} = useSelector(store => store.AppSlice);
  const [tempMails,setTempMails] = useState(emails);
  console.log("Tempmails ------------> " , tempMails);
  const dispatch = useDispatch();

  useEffect (() => {
    const q = query(collection(db,"emails"),orderBy("createdAt","desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const allEmails = snapshot.docs.map((doc) => ({...doc.data(),id: doc.id}))
      dispatch(setEmails(allEmails));
      console.log(allEmails);
    })

    return () => unsubscribe();
  }
  ,[])

  useEffect(() => {
    const filteredEmails = emails?.filter((email) => {
      return email?.subject?.toLowerCase().includes(searchText.toLowerCase()) || email?.to?.toLowerCase().includes(searchText.toLowerCase()) || email?.message?.toLowerCase().includes(searchText.toLowerCase());
    })
    setTempMails(filteredEmails);
  },[searchText,emails])

  if(tempMails.length === 0) return (<div>Email not found</div>)
  return (
  
    <div>
    {tempMails && tempMails?.map(email => <Message email={email} />)}
    </div>
  )
}

export default Messages
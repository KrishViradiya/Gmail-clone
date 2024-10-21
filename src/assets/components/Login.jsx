import { browserLocalPersistence, setPersistence, signInWithPopup } from 'firebase/auth';
import React from 'react'
import GoogleButton from 'react-google-button'
import { auth, provider } from '../../Firebase';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../../redux/AppSlice';
import { Link } from 'react-router-dom';
function Login() {
    const dispatch = useDispatch();

    const signInWithGoogle = async() => {
        try {
            await setPersistence(auth, browserLocalPersistence);
            const result  = await signInWithPopup(auth,provider);
            console.log(result);
            dispatch(setUser({
                displayName:result.user.displayName,
                email:result.user.email,
                photoUrl:result.user.photoURL
            }))

        } catch (error) {
            console.log(error);
        }
    }

  return (
    <div className='flex items-center justify-center h-screen w-screen'>
        <div className="flex flex-col gap-3 rounded-md bg-white p-8 ">
            <h1 className='text-center text-xl font-medium mb-5 '>
                Login
            </h1>
            <GoogleButton onClick={signInWithGoogle}/>
        </div>
        
    </div>
  )
}

export default Login


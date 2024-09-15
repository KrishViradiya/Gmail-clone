import React from 'react'
import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../Firebase';
import { useDispatch } from 'react-redux';
import { setUser } from '../../redux/AppSlice';

function Register() {
  const [user,setUser] = useState({
    email:'',
    password:'',
    displayName:'',
    photoUrl:''
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser(prevUser => ({
      ...prevUser,
      [name]: value
    }));
  };

  const handlePassword = (e) => {
    const password = e.target.value;
    setUser(prevUser => ({
      ...prevUser,
      password: password
    }));

    // Password strength validation
    const strongPassword = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})');
    const mediumPassword = new RegExp('((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))');
    
    if(strongPassword.test(password)) {
      // Password is strong
      console.log("Strong password");
    } else if(mediumPassword.test(password)) {
      // Password is medium strength
      console.log("Medium strength password");
    } else {
      // Password is weak
      console.log("Weak password");
    }
  };

  const dispatch = useDispatch();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, user.email, user.password);
      const user = userCredential.user;
      dispatch(setUser({
        displayName: user.displayName,
        email: user.email,
        photoUrl: user.photoURL
      }));
    } catch (error) { 
      console.log(error);
    }
  };


  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="px-8 py-6 mt-4 text-left bg-white shadow-lg rounded-lg">
        <h3 className="text-2xl font-bold text-center text-gray-800">Register for an Account</h3>
        <form action="" onSubmit={handleRegister}>
          <div className="mt-4">
            <div>
              <label className="block text-gray-700" htmlFor="email">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                id="email"
              />
            </div>
            <div className="mt-4">
              <label className="block text-gray-700" htmlFor="password">Password</label>
              <input
                onChange={handleChange}
                onBlur={handlePassword}
                name='password'
                value={user.password}
                type="password"
                placeholder="Enter your password"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                id="password"
              />
            </div>
            <div className="flex items-baseline justify-between">
              <button className="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50">
                Register
              </button>
              <a href="#" className="text-sm text-blue-600 hover:underline">Already have an account?</a>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register

import React, { useEffect } from "react";
import "./App.css";
import Navbar from "./assets/components/shared/Navbar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from "./assets/components/Body";
import Inbox from "./assets/components/Inbox";
import Mail from "./assets/components/Mail";
import SendMail from "./assets/components/SendMail";
import Login from "./assets/components/Login";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { setUser } from "./redux/AppSlice";
import { auth } from "./Firebase";
import Register from "./assets/components/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <Inbox />,
      },
      {
        path: "/mail/:id",
        element: <Mail />,
      },
    ],

  },
]);

function App() {
  // const user = false;
  const {user} = useSelector(store => store.AppSlice);

  const dispatch = useDispatch();

  useEffect(() => {
      // Listener for authentication state changes
      const unsubscribe = onAuthStateChanged(auth, (user) => {
          if (user) {
              // User is signed in, set the user in Redux state
              dispatch(setUser({
                  displayName: user.displayName,
                  email: user.email,
                  photoUrl: user.photoURL
              }));
          } else {
              // Optionally handle the case where the user is not logged in
              console.log("No user is signed in.");
          }
      });

      // Cleanup subscription on component unmount
      return () => unsubscribe();
  }, [dispatch]);

  return (
    <div className="bg-[#F6F8FC] h-screen w-screen overflow-hidden">
      {!user ? (
        <Login />
      ) : (
        <>
          <Navbar />
          <RouterProvider router={router} />
          <div className="absolute w-[30%] bottom-0 right-20 z-10 bg-red-300 ">
            <SendMail />
          </div>
        </>
      )}
    </div>
  );
}

export default App;

import React, {useRef, useState} from 'react';
import Header from "./Header.jsx";
import {checkValidData} from "../utils/validate.js";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile} from "firebase/auth";
import {auth} from "../utils/firebase.js";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {addUser} from "../utils/userSlice.js";

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true)
    const [errorMessage, setErrorMessage] = useState(null)
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const nameRef = useRef(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();


    const toggleSignInForm = () => {
        setIsSignInForm(prevState => !prevState);
    };
    const handleButtonClick = () => {
        const checkedMessage = checkValidData(emailRef.current.value, passwordRef.current.value);
        setErrorMessage(checkedMessage)
       if (checkedMessage) {
           return
       }
       if(isSignInForm) {
           signInWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
               .then((userCredential) => {
                   const user = userCredential.user;
                   setErrorMessage(null)
                   navigate("/browse");

               })
               .catch((error) => {
                   const errorCode = error.code;
                   const errorMessage = error.message;
                   setErrorMessage(errorMessage)
               });

       } else {
            createUserWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
                .then((userCredential) => {
                    const user = userCredential.user;
                    updateProfile(user, {
                        displayName: nameRef.current.value,
                    }).then(() => {
                        const {uid, email, displayName} = auth.currentUser;
                        dispatch(addUser({uid: uid, email: email, displayName: displayName}));
                        navigate("/browse");
                        setErrorMessage(null)
                    }).catch((error) => {
                        setErrorMessage(error.message);
                        navigate("/error");
                    });
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorMessage)
                    navigate("/error");
                });
       }
    };
    return (
        <div>
            <Header/>
            <div className={"absolute"}>
                <img
                    src={"https://assets.nflxext.com/ffe/siteui/vlv3/fa4630b1-ca1e-4788-94a9-eccef9f7af86/web/KR-en-20250407-TRIFECTA-perspective_d6922ac8-b7f9-4140-ae53-a57cb2eb3bd1_medium.jpg"}
                    alt={"logo"}/>
            </div>
            <form className={"absolute p-12 bg-black w-3/12 m-36 mx-auto right-0 left-0 text-white opacity-80"}
                  onSubmit={(e) => e.preventDefault()}>
                <h1 className={"font-bold text-3xl py-4 m-2"}>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
                {!isSignInForm && <input ref={nameRef} type={"text"} placeholder={"Name"}
                                         className={"p-4 bg-gray-900 my-2 border rounded-sm w-full"}/>}

                <input ref={emailRef} type={"text"} placeholder={"Email Address"}
                       className={"p-4 bg-gray-900 my-2 border rounded-sm w-full"}/>
                <input ref={passwordRef} type={"password"} placeholder={"Password"}
                       className={"p-4 bg-gray-900 my-2 border rounded-sm w-full"}/>

                {errorMessage && <p className={"text-red-500 font-bold text-sm"}>{errorMessage}</p>}
                <button
                    className={"p-4 my-6 w-full bg-red-700 rounded-sm"}
                    onClick={handleButtonClick}>{isSignInForm ? "Sign In" : "Sign Up"}</button>
                <p className={"py-4 cursor-pointer"} onClick={toggleSignInForm}>
                    {isSignInForm ? "New to Netflix? Sign up now" : "Already have an account? Sign in now"}
                </p>
            </form>
        </div>
    );
};

export default Login;
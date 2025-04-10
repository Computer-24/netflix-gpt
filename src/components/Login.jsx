import React, {useState} from 'react';
import Header from "./Header.jsx";


const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true)

    const toggleSignInForm = () => {
        setIsSignInForm(prevState => !prevState);
    };
    return (
        <div>
            <Header/>
            <div className={"absolute"}>
                <img
                    src={"https://assets.nflxext.com/ffe/siteui/vlv3/fa4630b1-ca1e-4788-94a9-eccef9f7af86/web/KR-en-20250407-TRIFECTA-perspective_d6922ac8-b7f9-4140-ae53-a57cb2eb3bd1_medium.jpg"}
                    alt={"logo"}/>
            </div>
            <form className={"absolute p-12 bg-black w-3/12 m-36 mx-auto right-0 left-0 text-white opacity-80"}>
                <h1 className={"font-bold text-3xl py-4 m-2"}>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
                {!isSignInForm && <input type={"text"} placeholder={"Name"}
                                        className={"p-4 bg-gray-900 my-2 border rounded-sm w-full"}/>}

                <input type={"text"} placeholder={"Email Address"}
                       className={"p-4 bg-gray-900 my-2 border rounded-sm w-full"}/>
                <input type={"password"} placeholder={"Password"}
                       className={"p-4 bg-gray-900 my-2 border rounded-sm w-full"}/>
                <button
                    className={"p-4 my-6 w-full bg-red-700 rounded-sm"}>{isSignInForm ? "Sign In" : "Sign Up"}</button>
                <p className={"py-4 cursor-pointer"} onClick={toggleSignInForm}>
                    {isSignInForm ? "New to Netflix? Sign up now" : "Already have an account? Sign in now"}
                </p>
            </form>
        </div>
    );
};

export default Login;
import React, {useEffect} from 'react';
import userIcon from "/public/netflixUser.png"
import {onAuthStateChanged, signOut} from "firebase/auth"
import {auth} from "../utils/firebase.js";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {addUser, removeUser} from "../utils/userSlice.js";
import {USER_LOGO} from "../utils/constants.js";

const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {user} = useSelector((state) => state.user);

    const handleSignOut = () => {
        signOut(auth).then(() => {
        }).catch((err) => {
            navigate("/error");
        })
    };

    useEffect(() => {
        const unsubscribe= onAuthStateChanged(auth, (user) => {
            if (user) {
                const {uid, email, displayName} = user;
                dispatch(addUser({uid: uid, email: email, displayName: displayName}));
                navigate("/browse");
            } else {
                dispatch(removeUser())
                navigate("/");
            }
        });
        return () => unsubscribe()
    }, [])

    return (
        <div className={"absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between"}>
            <img className={"w-40"} src={USER_LOGO}
                 alt={"logo"}/>
            {user?.uid &&
                <div className={"flex p-2"}>
                    <img className={"h-6 my-6"} src={userIcon} alt="user icon"/>
                    <button className={"font-bold text-white cursor-pointer"} onClick={handleSignOut}>Sign Out</button>
                </div>
            }
        </div>
    );
};

export default Header;
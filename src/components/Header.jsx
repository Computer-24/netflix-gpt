import React from 'react';
import userIcon from "/public/netflixUser.png"
import {signOut} from "firebase/auth"
import {auth} from "../utils/firebase.js";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";

const Header = () => {
    const navigate = useNavigate();
    const {user} = useSelector((state) => state.user);
    const handleSignOut = () => {
        signOut(auth).then(() => {
            navigate("/");
        }).catch((err) => {
            navigate("/error");
        })
    };
    return (
        <div className={"absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between"}>
            <img className={"w-40"} src={"https://meechum.prod.netflix.net/cdn/brand/netflix/logo/rgb.png"}
                 alt={"logo"}/>
            {/*<img src={"https://assets.nflxext.com/us/ffe/siteui/common/icons/nficon2023.ico"} alt={"logo"}/>*/}
            {user.uid &&
                <div className={"flex p-2"}>
                    <img className={"h-6 my-6"} src={userIcon} alt="user icon"/>
                    <button className={"font-bold text-white cursor-pointer"} onClick={handleSignOut}>Sign Out</button>
                </div>
            }
        </div>
    );
};

export default Header;
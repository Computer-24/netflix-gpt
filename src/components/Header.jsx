import React from 'react';

const Header = () => {
    return (
        <div className={"absolute px-8 py-2 bg-gradient-to-b from-black z-10"}>
            <img className={"w-40"} src={"https://meechum.prod.netflix.net/cdn/brand/netflix/logo/rgb.png"} alt={"logo"}/>
            {/*<img src={"https://assets.nflxext.com/us/ffe/siteui/common/icons/nficon2023.ico"} alt={"logo"}/>*/}
        </div>
    );
};

export default Header;
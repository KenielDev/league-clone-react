import React from "react";
import background from "/src/assets/img/home/pant-bg.jpg";
import backgroundMobile from "/src/assets/img/home/star-guardian-bg-mobile.png";
import backgroundVideo from "/src/assets/img/home/video-bg.webm";
import { Navbar } from "../components/navbar";
import { TabsHome } from "../components/TabsHome";

export function HomeContent() {
    return (
        <div
            style={{
                backgroundImage: `url(${background})`,
                backgroundSize: "cover",
            }}
            className="hidden md:flex flex-col w-full h-[100vh]"
        >
            <div className="h-full w-full">
                <Navbar />
                <TabsHome />
            </div>

            {/* <video
                autoPlay
                loop
                muted
                className="hidden md:flex -z-10 absolute h-full w-full object-cover"
            >
                <source src={backgroundVideo} type="video/webm" />
            </video> */}
            {/* <div
                className="md:hidden flex w-full h-[100vh]"
                style={{
                    backgroundImage: `url(${backgroundMobile})`,
                    backgroundSize: "cover",
                }}
            ></div> */}
        </div>
    );
}

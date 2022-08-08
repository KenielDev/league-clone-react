import React from "react";
import background from "/src/assets/img/home/bg-senna.jpg";
import backgroundMobile from "/src/assets/img/home/star-guardian-bg-mobile.png";
import backgroundVideo from "/src/assets/img/home/video-bg.webm";
import { Navbar } from "../components/navbar";

export function HomeContent() {
    return (
        <div>
            <Navbar />
            <div
                style={{
                    backgroundImage: `url(${background})`,
                    backgroundSize: "cover",
                }}
                className="hidden md:flex w-full h-[100vh]"
            ></div>
            {/* <video
                autoPlay
                loop
                muted
                className="hidden md:flex -z-10 absolute h-full w-full object-cover"
            >
                <source src={backgroundVideo} type="video/webm" />
            </video> */}
            <div
                className="md:hidden flex w-full h-[100vh]"
                style={{
                    backgroundImage: `url(${backgroundMobile})`,
                    backgroundSize: "cover",
                }}
            ></div>
        </div>
    );
}

import React from "react";
import { Link, Router } from "react-router-dom";

function buyClickSound() {
    const buySound = new Audio();
    buySound.src = "/src/assets/sounds/buy.wav";
    buySound.play();
}

function menuClickSound() {
    const menuSound = new Audio();
    menuSound.src = "/src/assets/sounds/menu.wav";
    menuSound.play();
}

export function Navbar() {
    return (
        <div className="flex flex-row">
            <nav className="absolute">
                <div className="flex border-b-full">
                    <div className="flex flex-row gap-x-80 ">
                        <div className="flex flex-row text-white font-semibold">
                            <div className="w-[230px] flex items-center py-6">
                                <a
                                    href=""
                                    className="hover:scale-105 ease-in-out duration-300"
                                >
                                    <img
                                        alt="Logo"
                                        src="./src/assets/img/navbar/play-icon.png"
                                    />
                                </a>
                            </div>
                            <div className="w-[50px] flex items-center ml-6">
                                <button className="hover:scale-105 ease-in-out duration-300">
                                    <img
                                        src="./src/assets/img/navbar/alert.png"
                                        alt="Alert Button"
                                    />
                                </button>
                            </div>
                            <div className="px-4 flex items-center h-full hover:bg-black">
                                <button
                                    onMouseDownCapture={menuClickSound}
                                    aria-current="page"
                                >
                                    HOME
                                </button>
                            </div>
                            <div className="px-4 flex items-center h-full hover:shadow-2xl shadow-black">
                                <button
                                    onMouseDownCapture={buyClickSound}
                                    aria-current="page"
                                >
                                    PROFILE
                                </button>
                            </div>
                            <div className="px-4 flex items-center h-full hover:bg-black">
                                <a
                                    onMouseDownCapture={menuClickSound}
                                    href=""
                                    aria-current="page"
                                >
                                    COLLECTION
                                </a>
                            </div>
                        </div>
                        <div className="flex w-full items-center gap-10">
                            <div className="w-[80px]">
                                <a href="">
                                    <img
                                        src="./src/assets/img/navbar/avatar.png"
                                        alt="Bag"
                                    />
                                </a>
                            </div>
                            <div className="w-[80px]">
                                <a href="">
                                    <img
                                        src="./src/assets/img/navbar/mochila.png"
                                        alt="Bag"
                                    />
                                </a>
                            </div>
                            <div className="w-[80px]">
                                <a href="">
                                    <img
                                        src="./src/assets/img/navbar/forja.png"
                                        alt="Bag"
                                    />
                                </a>
                            </div>
                            <div className="w-[80px]">
                                <a href="">
                                    <img
                                        src="./src/assets/img/navbar/free.png"
                                        alt="Bag"
                                    />
                                </a>
                            </div>
                            <div className="w-[80px]">
                                <a href="">
                                    <img
                                        src="./src/assets/img/navbar/coins.png"
                                        alt="Bag"
                                    />
                                </a>
                            </div>
                            <div className="grid grid-rows-2 border-l-2 h-[70%]">
                                <div className="flex items-center mx-auto">
                                    <div className="w-[50px]">
                                        <img
                                            className="px-2"
                                            src="./src/assets/img/navbar/rp.png"
                                            alt=""
                                        />
                                    </div>
                                    <div className="text-white font-bold">
                                        6600
                                    </div>
                                </div>
                                <div>
                                    <div className="flex items-center ">
                                        <div className="w-[50px]">
                                            <img
                                                src="./src/assets/img/navbar/ea.webp"
                                                alt=""
                                            />
                                        </div>
                                        <div className="text-white font-bold">
                                            6600
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <img
                                    className="rounded-full w-1/2"
                                    src="./src/assets/img/navbar/profile-icon.webp"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}
export default Navbar;

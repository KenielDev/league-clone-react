import React from "react";
import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import { Routes, Route, Link } from "react-router-dom";

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
        <header className="relative">
            <div className="flex px-4 flex-row justify-between bg-transparent w-full right-2 left-2">
                <div className="flex ">
                    <div className="flex items-center w-full text-white font-semibold">
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
                            <button aria-current="page">HOME</button>
                        </div>
                        <div className="px-4 flex items-center h-full hover:shadow-2xl shadow-black">
                            <Link to={"profile"} aria-current="page">
                                PROFILE
                            </Link>
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
                </div>
                <div className="">
                    <div className="flex w-full justify-items-end items-center gap-10 h-[80%]">
                        <div className="w-[50px]">
                            <a href="">
                                <img
                                    src="./src/assets/img/navbar/avatar.svg"
                                    alt="Bag"
                                />
                            </a>
                        </div>
                        <div className="w-[50px]">
                            <a href="">
                                <img
                                    src="./src/assets/img/navbar/mochila.svg"
                                    alt="Bag"
                                />
                            </a>
                        </div>
                        <div className="w-[50px]">
                            <a href="">
                                <img
                                    src="./src/assets/img/navbar/forja.svg"
                                    alt="Bag"
                                />
                            </a>
                        </div>
                        <div className="w-[50px]">
                            <a href="">
                                <img
                                    src="./src/assets/img/navbar/free.svg"
                                    alt="Bag"
                                />
                            </a>
                        </div>
                        <div className="w-[50px]">
                            <a href="">
                                <img
                                    src="./src/assets/img/navbar/coin.svg"
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
                                <div className="text-white font-bold">6600</div>
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
                        <Menu>
                            <MenuButton as={Button}>
                                <img
                                    className="rounded-full w-[80px]"
                                    src="./src/assets/img/navbar/profile-icon.webp"
                                    alt=""
                                />
                            </MenuButton>
                            <MenuList className="text-white bg-[#2D3748]  rounded-xl py-2">
                                <MenuItem className="hover:bg-gray-600 w-full p-2 font-semibold">
                                    Configs
                                </MenuItem>
                                <MenuItem className="hover:bg-gray-600 w-full p-2 font-semibold">
                                    Logout
                                </MenuItem>
                                <MenuItem className="hover:bg-gray-600 w-full p-2 font-semibold">
                                    Support
                                </MenuItem>
                                <MenuItem className="hover:bg-gray-600 w-full p-2 font-semibold">
                                    Delete
                                </MenuItem>
                                <MenuItem className="hover:bg-gray-600 w-full p-2 font-semibold">
                                    Attend a Workshop
                                </MenuItem>
                            </MenuList>
                        </Menu>
                        <div></div>
                    </div>
                </div>
            </div>
        </header>
    );
}
export default Navbar;

import React from "react";

export function ChampionCard(props: any) {
    return (
        <div
            style={{
                backgroundImage: `url(${props.image})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
            }}
            className="flex flex-col w-1/6 hover:z-10 border h-[400px] opacity-80 hover:opacity-100 rounded-xl hover:scale-110 ease-in-out duration-300 cursor-pointer"
        >
            <div className="flex flex-col h-1/2 my-auto p-4 justify-center items-center ">
                <div className="row-span-4"></div>
                <div className="font-semibold text-xl text-rose-300 text-center">
                    {props.name}
                </div>
                <div className="flex justify-around text-white text-center">
                    <div className="flex flex-wrap">{props.description}</div>
                </div>
            </div>
        </div>
    );
}
export default ChampionCard;

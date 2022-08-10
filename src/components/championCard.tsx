import React from "react";

export function ChampionCard(props: string) {
    return (
        <div
            style={{
                backgroundImage: `url(${props.image})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
            }}
            className="flex flex-col w-[10%] border h-[400px] opacity-80 hover:opacity-100 rounded-xl hover:scale-110 ease-in-out duration-300 cursor-pointer"
        >
            <div className="grid grid-rows-6">
                <div className="row-span-4"></div>
                <div className="font-semibold text-center text-white">
                    {props.name}
                </div>
                <div className="flex justify-around text-white">
                    <div>Rp: Valor</div>
                    <div>Ea: Valor</div>
                </div>
            </div>
        </div>
    );
}
export default ChampionCard;

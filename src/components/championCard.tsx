import React from "react";

export function ChampionCard(props: any) {
    return (
        <div className="border pb-4 px-4 w-1/6 rounded-xl bg-[#8D7433]">
            <div className="py-6">
                <div className="border flex justify-between p-2 text-xl font-semibold rounded-lg bg-[#8D7433]">
                    <div>{props.name}</div>
                    <div>HP: {props.hp}</div>
                </div>
            </div>
            <div
                style={{
                    backgroundImage: `url(${props.image})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                }}
                className="border h-[300px] rounded-xl"
            ></div>
            <div className="pt-2">
                <div className="border p-2 text-md font-bold rounded-lg bg-[#8D7433]">
                    <div>
                        <div>{props.title}</div>
                        <div className="gap-2 flex">
                            Classes: {props.classes}
                        </div>
                    </div>
                    <div className="flex justify-end gap-4 mt-10">
                        <div>Attack: {props.atack}</div>
                        <div>Armor: {props.defense}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ChampionCard;

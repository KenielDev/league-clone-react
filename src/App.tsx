import React, { useEffect, useState } from "react";
import { ChampionCard } from "/src/components/championCard";
// import { Container } from './styles';

const App: React.FC = () => {
    const [champions, setChampions] = useState([[]]);

    function getChampions() {
        fetch(
            "http://ddragon.leagueoflegends.com/cdn/12.14.1/data/en_US/champion.json"
        )
            .then((response) => response.json())
            .then((result) => setChampions(result.data));
        console.log(champions);
    }

    const array = [];
    array.push(champions);
    //   console.log(array);

    const arrChampions = array.map(function (obj) {
        return Object.keys(obj).map(function (key) {
            return obj[key];
        });
    });

    console.log(arrChampions);

    const championLoading =
        "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/";

    const championIcon =
        "http://ddragon.leagueoflegends.com/cdn/12.14.1/img/champion/";

    useEffect(() => {
        getChampions();
    }, []);

    return (
        <div className="flex flex-wrap overflow-x-auto ">
            {arrChampions[0].map((champion) => {
                return (
                    <ChampionCard
                        name={`${champion.name}`}
                        image={`${championLoading}${champion.id}_0.jpg`}
                    />
                );
            })}
        </div>
    );
};

export default App;

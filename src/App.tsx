import React, { useEffect, useState } from "react";
import { ChampionCard } from "./components/championCard";
import { BrowserRouter as Router } from "react-router-dom";
import { MainRoutes } from "./pages/Routes";

// import { Container } from './styles';

export function App() {
    const [champions, setChampions] = useState([]);

    const imageArray = [1, 2, 3];

    const pathsChampions = {
        championLoading:
            "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/",
        championIcon:
            "http://ddragon.leagueoflegends.com/cdn/12.14.1/img/champion/",
        championSplashArt:
            "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/",
    };

    const randomImage =
        imageArray[Math.floor(Math.random() * imageArray.length)];

    useEffect(() => {
        fetch(
            "http://ddragon.leagueoflegends.com/cdn/12.14.1/data/pt_BR/champion.json"
        )
            .then((response) => response.json())
            .then((result) => setChampions(result.data));
        console.log(champions);
    }, []);

    const array = [];
    array.push(champions);
    //   console.log(array);

    const arrChampions = array.map(function (obj) {
        return Object.keys(obj).map(function (key: any) {
            return obj[key];
        });
    });

    const skinsChampions = `_${randomImage}.jpg`;

    console.log(arrChampions);

    return (
        <Router>
            <div className="flex flex-wrap gap-4 justify-center">
                {arrChampions[0].map((champion: any) => {
                    return (
                        <ChampionCard
                            name={`${champion.name}`}
                            image={`${pathsChampions.championIcon}${champion.id}.png`}
                            description={champion.blurb}
                            title={champion.title}
                            classes={champion.tags.map((classes: any) => {
                                return <div>{classes}</div>;
                            })}
                            hp={champion.stats.hp}
                            atack={champion.stats.attackdamage}
                            defense={champion.stats.armor}
                        />
                    );
                })}
                <MainRoutes />
            </div>
        </Router>
    );
}
export default App;

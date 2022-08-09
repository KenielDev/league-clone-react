import React, { useEffect, useState } from "react";
import { ChampionCard } from "./components/championCard";
import { HomeContent } from "./pages/home";
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

    const skinsArray = [2, 3, 1];

    const randomSkins = Math.floor(Math.random() * skinsArray.length);

    const randomImageSkins = `_${skinsArray[randomSkins]}.jpg`;

    console.log(randomImageSkins);

    const championLoading =
        "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/";

    const championIcon =
        "http://ddragon.leagueoflegends.com/cdn/12.14.1/img/champion/";

    const championSplashArt =
        "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/";

    useEffect(() => {
        getChampions();
    }, []);

    return (
        <div>
            {/* <div className="flex flex-wrap">
                {arrChampions[0].map((champion) => {
                    return (
                        <ChampionCard
                            name={`${champion.name}`}
                            image={`${championSplashArt}${champion.id}${randomImageSkins}`}
                        />
                    );
                })}
            </div> */}
            <div>
                <HomeContent />
            </div>
        </div>
    );
};

export default App;

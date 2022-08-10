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

    const imageArray = [1, 2, 3];

    const championLoading =
        "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/";

    const championIcon =
        "http://ddragon.leagueoflegends.com/cdn/12.14.1/img/champion/";

    const championSplashArtImage =
        "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/";

    const randomImage =
        imageArray[Math.floor(Math.random() * imageArray.length)];

    const skinsChampions = `_${randomImage}.jpg`;

    useEffect(() => {
        getChampions();
    }, []);

    return (
        <div className="">
            <div className="flex jus">
                {/* {arrChampions[0].map((champion) => {
                return (
                    <ChampionCard
                        name={`${champion.name}`}
                        image={`${championSplashArtImage}${champion.id}${skinsChampions}`}
                    />
                );
            })} */}
            </div>
            <div>
                <HomeContent />
            </div>
        </div>
    );
};

export default App;

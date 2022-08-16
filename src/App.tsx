import React, { useEffect, useState } from "react";
import { ChampionCard } from "./components/championCard";
import { HomeContent } from "./pages/home";
import { Profile } from "./pages/Profile";
import { BrowserRouter as Router } from "react-router-dom";
import { MainRoutes } from "./pages/Routes";

// import { Container } from './styles';

export function App() {
    const [champions, setChampions] = useState([]);

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
        return Object.keys(obj).map(function (key: any) {
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
        <Router>
            <div>
                {/* <div className="flex"> */}
                {/* {arrChampions[0].map((champion) => {
                return (
                    <ChampionCard
                        name={`${champion.name}`}
                        image={`${championSplashArtImage}${champion.id}${skinsChampions}`}
                    />
                );
            })} */}
                {/* </div> */}
                <MainRoutes />
            </div>
        </Router>
    );
}

export default App;

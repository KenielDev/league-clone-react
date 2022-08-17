import React, { useEffect, useState } from "react";
// import { Container } from './styles';

const [champions, setChampions] = useState([]);

export function getChampions() {
    fetch(
        "http://ddragon.leagueoflegends.com/cdn/12.14.1/data/en_US/champion.json"
    )
        .then((response) => response.json())
        .then((result) => setChampions(result.data));
    console.log(champions);
}

const array = [];
array.push(champions);

const arrChampions = array.map(function (obj) {
    return Object.keys(obj).map(function (key: any) {
        return obj[key];
    });
});

console.log(arrChampions);

const imageArray = [1, 2, 3];

export function pathsChampions() {
    [
        {
            championLoading:
                "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/",
        },
        {
            championIcon:
                "http://ddragon.leagueoflegends.com/cdn/12.14.1/img/champion/",
        },
        {
            championSplashArt:
                "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/",
        },
    ];
}

const randomImage = imageArray[Math.floor(Math.random() * imageArray.length)];

const skinsChampions = `_${randomImage}.jpg`;

useEffect(() => {
    getChampions();
}, []);

export default pathsChampions;

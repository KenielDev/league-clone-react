import React, { useEffect, useState } from "react";
// import { Container } from './styles';

const Api: React.FC = () => {
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

  const arr = array.map(function (obj) {
    return Object.keys(obj).map(function (key) {
      return obj[key];
    });
  });

  console.log(arr);

  const championLoading =
    "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/";

  const championIcon =
    "http://ddragon.leagueoflegends.com/cdn/12.14.1/img/champion/";

  useEffect(() => {
    getChampions();
  }, []);

  return (
    <div>
      {/* {arr[0].map((champion) => {
        return (
          <div key={champion.name} className="flex">
            <li>{champion.name}</li>
            <img src={`${championLoading}${champion.id}_0.jpg`} alt="" />
          </div>
        );
      })} */}
    </div>
  );
};

export default Api;

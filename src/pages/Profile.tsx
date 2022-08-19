import React, { useState, useEffect } from "react";
import pathsChampions, { getChampions } from "../components/api";
import Champions from "../components/Champions";

export function Profile() {
    const [splahArt, setSplahArt] = useState([]);

    useEffect(() => {
        Champions();
    }, []);

    return <></>;
}

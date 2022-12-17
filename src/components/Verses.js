import {useState, useEffect } from "react";
import Verse from "./Verse";

const Verses = () => {
    const [verses, setVerses] = useState([]);
    const [randomVerse, setRandomVerse] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:3000/verses')
            .then((response) => response.json())
            .then(responseJson => {
                setVerses(responseJson);
                setIsLoading(false);
                setRandomVerse(responseJson[Math.floor(Math.random() *  responseJson.length)])
            })
            .catch(err => {
                console.log(err);
                setIsLoading(false);
            })
    }, []);

    if (isLoading) {
        return <>LOADING...</>
    }

    if (randomVerse) {
        return <Verse book={randomVerse.book} chapter={randomVerse.chapter} verses={randomVerse.verses} content={randomVerse.content} />
    }

    return <></>
};

export default Verses;

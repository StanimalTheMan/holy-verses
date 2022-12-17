import React from "react";
import styles from "./styles.module.css";

const Verse = ({book, chapter, verses, content}) => {
    const [isVerseRevealed, setIsVerseRevealed] = React.useState(false);

    const handleClick = () => {
        setIsVerseRevealed(!isVerseRevealed);
    }

    let versesFormatted;

    if (verses.length === 1) {
        versesFormatted = verses[0];
    } else {
        // e.g. verses = [25, 26, 27] -> 25-27
        versesFormatted = `${verses[0]}-${verses[verses.length - 1]}`;
    }
    console.log(book, chapter, verses, content)
    return (
        <>
            {isVerseRevealed ? 
            <button onClick={handleClick} className={styles.verse}>
                {content}
            </button> : <button onClick={handleClick}>{book} {chapter}:{versesFormatted}</button>}
        </>
    )
};

export default Verse;
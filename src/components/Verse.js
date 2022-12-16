import React from "react";
import styles from "./styles.module.css";

const Verse = ({verse, content}) => {
    const [isVerseRevealed, setIsVerseRevealed] = React.useState(false);

    const handleClick = () => {
        setIsVerseRevealed(!isVerseRevealed);
    }

    return (
        <div>
            {isVerseRevealed ? 
            <button onClick={handleClick} className={styles.verse}>
                {content}
            </button> : <button onClick={handleClick}>{verse}</button>}
        </div>
    )
};

export default Verse;
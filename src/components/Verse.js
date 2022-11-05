import React from "react";
import styles from "./styles.module.css";

const Verse = ({verse}) => {
    const [isVerseRevealed, setIsVerseRevealed] = React.useState(false);

    const handleClick = () => {
        setIsVerseRevealed(!isVerseRevealed);
    }

    return (
        <>
        <button onClick={handleClick}>Toggle</button>
        {isVerseRevealed ? 
        <div className={styles.verse}>
            {verse}
        </div> : <div>Matthew 5:28</div>}
        </>
    )
};

export default Verse;
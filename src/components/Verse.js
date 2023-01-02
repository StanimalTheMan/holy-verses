import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
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
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea onClick={handleClick}>
                <CardContent>
                    {isVerseRevealed ? 
                        <Typography variant="body2" color="text.secondary">
                            {content}
                        </Typography> :
                        <Typography gutterBottom variant="h5" component="div">
                        {book} {chapter}:{versesFormatted}
                        </Typography>
                    }
                </CardContent>
            </CardActionArea>
        </Card>
    )
};

export default Verse;
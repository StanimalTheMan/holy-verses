import React from "react";
import Verse from "./Verse";

const verses = [
    {
        verse: "Matthew 5:28",
        content: "But I say to you that everyone who looks at a woman with lustful intent has already committed adultery with her in his heart."
    },
    // {
    //     verse: "2 Corinthians 4:4",
    //     content: "In their case the god of this world has blinded the minds of the unbelievers, to keep them from seeing the light \
    //             of the gospel of the glory of Christ, who is the image of God."
    // }
]

const Verses = () => {
    return (
        verses.map(verse => {
            return <Verse key={verse.verse} verse={verse.verse} content={verse.content} />
        })
    )
};

export default Verses;

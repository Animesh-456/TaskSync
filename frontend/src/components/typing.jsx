import React, { useState, useEffect } from 'react';

const TypingAnimation = ({ text, speed }) => {
    const [displayText, setDisplayText] = useState('');
    const [textIndex, setTextIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            if (textIndex < text.length) {
                setDisplayText((prevText) => prevText + text[textIndex]);
                setTextIndex((prevIndex) => prevIndex + 1);
            }
        }, speed);

        return () => clearInterval(timer);
    }, [textIndex, text, speed]);

    return <span>{displayText}</span>;
};

export default TypingAnimation;
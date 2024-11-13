import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CardPlaces from '../pages/CardPlaces';
import baalbek from '../assets/images/Baalbek.webp';
import placesData from '../placesData';

const CardContainer = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => 
                prevIndex === placesData.length - 1 ? 0 : prevIndex + 1
            );
        }, 3000);

        return () => clearInterval(interval);
    }, [currentIndex]);

    const placesArray = Object.keys(placesData).map(key => placesData[key]);

    const getIndex = (index) => {
        return (index + placesData.length) % placesData.length;
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? placesData.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === placesData.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div style={containerStyle}>
            <button onClick={handlePrev} style={{ ...arrowButtonStyle, left: '10px' }}>
                ◀
            </button>
            <AnimatePresence initial={false}>
                {[currentIndex - 1, currentIndex, currentIndex + 1].map((offset, i) => {
                    const index = (offset + placesArray.length) % placesArray.length;
                    const place = placesArray[index];

                    return (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0 }}
                            animate={{
                                opacity: 1,
                                scale: i === 1 ? 1 : 0.9,
                                x: i === 0 ? 200 : i === 1 ? 0 : -200,
                                zIndex: i === 1 ? 10 : 5,
                            }}
                            transition={{ duration: 0.8, type: 'spring' }}
                            exit={{ opacity: 0 }}
                            style={{
                                position: 'absolute',
                                filter: i === 1 ? 'none' : 'brightness(0.7)',
                                transform: i === 1 ? 'scale(1.1)' : 'scale(0.9)',
                            }}
                        >
                            <CardPlaces
                                image={place.image}
                                title={place.title}
                                content={place.content}
                                stars={place.stars}
                            />
                        </motion.div>
                    );
                })}
            </AnimatePresence>
            <button onClick={handleNext} style={{ ...arrowButtonStyle, right: '10px' }}>
                ▶
            </button>
        </div>
    );
};

const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    width: '100%',
    height: '100vh',
    position: 'relative',
};

const arrowButtonStyle = {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    backgroundColor: 'transparent',
    border: 'none',
    fontSize: '2rem',
    cursor: 'pointer',
    zIndex: 20,
};

export default CardContainer;

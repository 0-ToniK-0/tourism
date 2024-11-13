import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const CardPlaces = ({ image, title, content, stars }) => {
    const [isWideScreen, setIsWideScreen] = useState(window.innerWidth > 800);
    const navigate = useNavigate();

    useEffect(() => {
        const handleResize = () => {
            setIsWideScreen(window.innerWidth > 800);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleCardClick = () => {
        navigate(`/visit/${title.toLowerCase()}`);
    };

    // Define styles inside the component based on `isWideScreen`
    const cardStyle = {
        width: isWideScreen ? '400px' : '300px',  // Adjust for small screens
        margin: '10px',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '10px',
        backgroundColor: '#f9f9f9',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        cursor: 'pointer',
    };

    const imageStyle = {
        width: '100%',
        height: '250px',
        borderRadius: '8px',
        marginBottom: '10px',
    };

    return (
        <motion.div style={cardStyle} onClick={handleCardClick}>
            <img src={image} alt={title} style={imageStyle} />
            <h2>{title}</h2>
            <p>{content}</p>
            <p>{renderStars(stars)}</p>
        </motion.div>
    );
};

// Function to render stars
const renderStars = (stars) => {
    const fullStars = Math.floor(stars);
    const halfStar = stars % 1 ? '⭐' : '';
    return '⭐'.repeat(fullStars) + halfStar;
};

export default CardPlaces;

import React, { useState, useEffect } from 'react';

const ImageCarousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentIndex((prevIndex) => 
            (prevIndex - 1 + images.length) % images.length
        );
    };

    useEffect(() => {
        const interval = setInterval(nextImage, 4000);
        return () => clearInterval(interval);
    }, [currentIndex]);

    return (
        <div style={{ position: 'relative', display:'flex', justifyContent:'center', margin: 'auto' }}>
            <img
                src={images[currentIndex]}
                alt={`Slide ${currentIndex}`}
                style={{ width: '60%', height: '500px', borderRadius: '8px' }}
            />
            <button
                onClick={prevImage}
                style={{ ...buttonStyle, left:'15%', }}
            >
                &lt;
            </button>
            <button
                onClick={nextImage}
                style={{ ...buttonStyle, right:'15%' }}
            >
                &gt;
            </button>
        </div>
    );
};

const buttonStyle = {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    backgroundColor: 'transparent',
    border: 'none',
    fontSize: '2rem',
    cursor: 'pointer',
    zIndex: 20,
};

export default ImageCarousel;

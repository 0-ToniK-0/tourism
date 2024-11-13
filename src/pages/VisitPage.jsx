import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import placesData from '../placesData';
import ImageCarousel from '../components/ImageCarousel';
import Comments from '../components/Comments';

const VisitPage = () => {
    const { placeId } = useParams();
    const place = placesData[placeId.toLowerCase()];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!place) {
        return <div style={{ marginTop: '70px' }}>Place not found</div>;
    }

    const paragraphStyle = {
        fontSize: '18px',
        lineHeight: '1.6',
        color: '#333',
        margin: '10px auto',
        textAlign: 'justify',
        padding:"5px",
        width:'50%',
    };

    return (
        <>
            <div style={{ marginTop: '70px' }}>
                <h1 style={{ textAlign:'center', margin:'10px' }}>Welcome to {place.title}</h1>
                <p style={{ textAlign:'center', margin:'10px' }}>{ place.shortDesc }</p>
                <img src={place.image} alt={place.title} style={{ height:'100vh', width:'100%', marginBottom:'-5px', objectFit:'cover', }} />
                 <p style={paragraphStyle}>{place.hist}</p>
                <div style={{ backgroundColor:'#eee', padding:'20px' }}>
                   <h1 style={{ textAlign:'center', margin:'0 10px 10px' }}>Here are some pictures of {place.title}:</h1>
                    <ImageCarousel images={ place.images }/>
                </div>
                <div style={{ display: "flex", justifyContent:'space-around', alignItems:'center', margin:'20px', height:'400px' }}>
                    <div>
                       <h1>Entrance fees:</h1>
                      <p>{place.title} entrance fees are <span style={{ fontWeight:'bold', }}>{place.entrance}</span></p>
                    </div>
                    
                    <iframe
                        title="Our Location"
                        src={place.map}
                        width="400px%"
                        height="100%"
                        style={{ border: 0, borderRadius:'15px' }}
                        allowFullScreen=""
                        loading="lazy"
                    ></iframe>                </div>
            </div>
            <Comments />
        </>
        
    );
};

export default VisitPage;

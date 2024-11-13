import React from 'react';

const Error = () => {
    return (
        <div style={{ textAlign: 'center', marginTop: '70px', display:'flex', alignItems:'center', justifyContent:'space-around' }}>
            <div style={{ margin: '15px',textAlign:'center', }}>
               <h1>ERROR 404 Not Found</h1>
               <p>The page you are looking for does not exist.</p>
               <p>Enjoy a cup of coffee with us with an amazing view</p>
            </div>
            
            <img src='https://mamaslebanesekitchen.com/wp-content/uploads/2022/03/Lebanese-Coffee.jpg' alt='coffe time' style={{ width:'50%', borderRadius:'30px', margin:'10px', }}/>
        </div>
    );
};

export default Error;

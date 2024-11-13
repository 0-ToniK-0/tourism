import React, { useEffect } from 'react';
import Hero from '../components/Hero'
import HeroText from '../components/HeroText'
import History from '../components/history'
import CardContainer from '../components/CardContainer'

const Home = () =>{
    useEffect(() => {
        window.scroll(0,0);
    }, [])

    return(
        <>
            <HeroText/>
            <Hero/>
            <History/>
            <CardContainer/>
        </>
    )
}

export default Home;
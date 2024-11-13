import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import VisitPage from './pages/VisitPage';
import NavBar from './layouts/navBar'
import Footer from './layouts/Footer';
import CardPlaces from './pages/CardPlaces';
import Error from './pages/Error';
import LogIn from './pages/LogIn';
import SignIn from './pages/SignIn';
import './index.css'
import { useState,useEffect } from 'react';
import LoactionsPage from './pages/LoactionsPage';
import ContactUsPage from './pages/ContactUsPage';


const MainPage = () => {
    const [locs,setLocs] = useState([])
    useEffect(() => {
        const fetchLocs = async () => {
            try {
              const res = await fetch(`/api/locations`);
              const data = await res.json();
              setLocs(data);
            }
            catch(error){
              console.log(error);
            }
            // finally{
            //   setLoading(false);
            // }
        }
        fetchLocs();
      },[]);
    return (
        <>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/login" element={<LogIn />} />
                <Route path="/signIn" element={<SignIn />} />
                <Route path="/contactUs" element={<ContactUsPage />} />

                <Route path="/visit/:placeId" element={<VisitPage/>} />
                <Route path="/visit" element={<LoactionsPage locations={locs}/>} />
                <Route path="/Cards" element={<CardPlaces />} />
                <Route path="*" element={<Error />} />
            </Routes>
            <Footer />
        </>
    );
};

export default MainPage;

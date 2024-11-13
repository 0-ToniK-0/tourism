import logo from "../assets/images/lebanon-logo.png"
import arrow from "../assets/images/arrow-sm-right-svgrepo-com.svg"
import '../components/NavBar.css'
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/ReactToastify.css';
import styleB from "../assets/images/styleB.module.css";
const NavBar = () => {
    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScroll(true);
            } else {
                setScroll(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    },
        []);

    const navStyle = {
        height: "60px",
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "fixed",
        top: "0",
        zIndex: "100",
        backgroundColor: scroll ? "#FFF" : "transparent",
        boxShadow: scroll ? "0 2px 10px rgba(0, 0, 0, 0.1)" : "none",
        transition: "background-color 0.3s ease, box-shadow 0.3s ease",
    }

    return (
        <>
            <nav style={navStyle} >
                <NavLink to='/'>
                    <img src={logo} alt="leb logo" style={{ height: "60px", }} />
                </NavLink>
                <div>
                    <NavLink className={styleB.underlineButtons} style={{color: 'black' }} to='/'>Home</NavLink>
                    <NavLink className={styleB.underlineButtons} style={{color: 'black'}} to='/visit'>Visit</NavLink>
                    <NavLink className={styleB.underlineButtons} style={{color: 'black'}} to='/contactUs'>Contact Us</NavLink>
                    <NavLink className={styleB.underlineButtons} style={{color: 'black'}} to='/login'>Login</NavLink>
                </div>
                <div style={{ display: "flex", }}>
                    <NavLink className={styleB.underlineButtons} style={{color: 'black'}} to='/signIn'>Sign in</NavLink>
                    <img src={arrow} alt="Arrow Right" style={{ height: "50px", }} />
                </div>
            </nav >
            <ToastContainer />
        </>
    );
}

export default NavBar;
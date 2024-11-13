import video from '../assets/images/HeroVid.mp4'

const Hero = ()=>{
    return(
        <video style={{height:"100vh", width:"100%", objectFit:"cover",}} autoPlay muted loop>
            <source src={video} type="video/mp4"/>
        </video>
    );
}

export default Hero;
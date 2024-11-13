import styleA from '../assets/images/styleA.module.css'
const Footer = () =>{
    return(
        <>
            <footer style={{ backgroundColor:'black', color:'white', display:'flex', flexWrap:'wrap', alignItems:'center', justifyContent:'space-around', padding:'50px 0' }}>
                <div>
                    <h4 style={{fontSize:"20px"}}>Contact us</h4>
                    <p className={styleA.underlineButtons} style={{ padding:'5px 0' }}>✉︎ Email:<a style={call} href='mailto:layal.estephan@hotmail.com'>layal.estephan@hotmail.com</a></p>
                    <p className={styleA.underlineButtons} style={{ padding:'5px 0' }}>✉︎ Email:<a style={call} href='mailto:layal.estephan@hotmail.com'>toni.kanaan@hotmail.com</a></p>
                    <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} style={{ width:'110px', height:'30px', border:0, borderRadius:'10px', marginTop:'40px' }}>
                        Back to Top &#129145;
                    </button>
                </div>
                <div>
                    <h4 style={{fontSize:"20px", textDecoration:'underline' }}>Emergency contact:</h4>
                    <p className={styleA.underlineButtons} style={{ padding:'5px 0' }}>✆ Red Cross:<a style={call} href='tell:140'>140</a></p>
                    <p className={styleA.underlineButtons} style={{ padding:'5px 0' }}>✆ Police:<a style={call} href='tell: 112'>112</a></p>
                    <p className={styleA.underlineButtons} style={{ padding:'5px 0' }}>✆ Civil Defense:<a style={call} href='tell: 125'>125</a></p>
                </div>
                <div style={{ width: '250px', height: '250px' }}>
                    <h3 style={{ textDecoration:'underline', marginBottom:'10px', }}>Visit us:</h3>
                    <iframe
                        title="Our Location"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3308.4122643714736!2d35.618662!3d33.981943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151f408e4cf6c665%3A0xb427f123cedc20e6!2sHoly%20Spirit%20University%20of%20Kaslik%20-%20Lebanese%20Maronite%20Order!5e0!3m2!1sen!2slb!4v1730324101174!5m2!1sen!2slb"
                        width="100%"
                        height="100%"
                        style={{ border: 0, borderRadius:'15px' }}
                        allowFullScreen=""
                        loading="lazy"
                    ></iframe>
            </div>
            </footer>
        </>
    )
}

const call={
    color:'inherit',
    textDecoration:'none',
    marginLeft: '5px',
}

export default Footer;
import { motion } from "framer-motion";
import { animationStart, reveal } from "../utilities/animationStart";

const HeroText = () => {
    return (
        <motion.div
            layout
            initial={{ height: 0 }}
            animate={{ height: "unset" }}
            transition={{ delay: animationStart, duration: 1 }}
        >
            <motion.div
                variants={reveal}
                initial="hiddenVar"
                animate="revealedVar"
                transition={{ delay: animationStart + 1, duration: 0.5 }}
                style={{ padding: "10% 0 5%", textAlign: "center", }}
            >
                <h1 className="lebanon-text" style={{ fontSize: '60px' }}>
                    Welcome to{" "}
                    <span className="flag-text" style={{color:'black',}}>Lebanon</span>
                </h1>
                <motion.div
                    variants={reveal}
                    initial="hiddenVar"
                    animate="revealedVar"
                    transition={{ delay: animationStart + 1.2, duration: 0.5 }}
                >
                    <p style={{ padding: "10px 0", fontSize: "23px" }}>
                        We hope you are/will be enjoying your stay here!
                    </p>
                    <p style={{ fontSize: "20px", paddingBottom: "30px" }}>
                        Here is a little guide for your next destination
                    </p>
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default HeroText;

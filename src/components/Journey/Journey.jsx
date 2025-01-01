import "./Journey.css"
import journeyImage from "../../img/journey.svg"

export default function Journey(){
    return(
        <div className="journey-main" id="journey">
            <div className="journey-grid">
                <div className="left">
                    <h1>My Journey</h1>
                    <h4>
                        I am currently an undergraduate student pursuing a degree in Computer Science at Ontario Tech University. My journey into the world of coding began in my adolescence, sparked by a natural curiosity about how websites and computers functioned. This initial intrigue quickly evolved into a deep passion for technology and problem-solving. Over the years, I’ve honed my skills, particularly in web development, and have become fascinated with the endless possibilities it offers for both creative expression and practical solutions.
                    </h4>

                    <h4>
                        I am passionate about building websites that not only entertain but also solve real-world problems. Whether it's creating intuitive user interfaces or designing interactive experiences, I enjoy the process of transforming ideas into functional, engaging digital platforms. Through my academic and personal projects, I strive to combine technical knowledge with creativity, aiming to contribute to the development of accessible, impactful, and enjoyable web experiences.
                    </h4>
                    <div className="resume"><button>Resume</button></div>
                </div>
                
                <div className="right">
                    <img src={journeyImage} alt="" />
                </div>
            </div>
        </div>
    )
}
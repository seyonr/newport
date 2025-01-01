import "./Experience.css"
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython, FaJava, FaGithub, FaGitAlt } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiCplusplus, SiNetlify, SiIntellijidea } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";


export default function Experience(){
    const webIcons = [
        { name: "HTML", icon: <FaHtml5 /> },
        { name: "CSS", icon: <FaCss3Alt /> },
        { name: "JavaScript", icon: <FaJs /> },
        { name: "React", icon: <FaReact /> },
        { name: "TailwindCSS", icon: <RiTailwindCssFill /> },
        { name: "NodeJS", icon: <FaNodeJs /> },
    ];

    const webDev = webIcons.map((e) => {
        return(
            <div className="dev-icon">
                <div className="icon">{e.icon}</div>
                <p>{e.name}</p>
            </div>
        )
    })

    const softIcons = [
        { name: "C++", icon: <SiCplusplus /> },
        { name: "Python", icon: <FaPython /> },
        { name: "Java", icon: <FaJava /> },
    ]

    const softDev = softIcons.map(e => {
        return(
            <div className="dev-icon">
                <div className="icon">{e.icon}</div>
                <p>{e.name}</p>
            </div>
        )
    })

    const toolsIcons = [
        { name: "VS Code", icon: <VscVscode /> },
        { name: "IntelliJ", icon: <SiIntellijidea /> },
        { name: "GitHub", icon: <FaGithub /> },
        { name: "Git", icon: <FaGitAlt /> },
        { name: "Netlify", icon: <SiNetlify /> },
    ]

    const tools = toolsIcons.map(e => {
        return(
            <div className="dev-icon">
                <div className="icon">{e.icon}</div>
                <p>{e.name}</p>
            </div>
        )
    })
    
    return(
        <div className="exp-main" id="exp">
            <div className="exp">
                <h1>Experience</h1>
                <div className="web-dev">
                    <h4 className="exp-h4">Web Development</h4>
                    <div className="dev-holder">{webDev}</div>
                </div>

                <div className="soft-dev">
                    <h4 className="exp-h4">Software Development</h4>
                    <div className="dev-holder">{softDev}</div>
                </div>

                <div className="tools">
                    <h4 className="exp-h4">Tools</h4>
                    <div className="dev-holder">{tools}</div>
                </div>
            </div>
        </div>
    )
}
import "./Personal.css"
import data from "./data.json";
import { FaGithub, FaLink } from "react-icons/fa";


export default function Personal(){
    const projectsEle = data.map((e) => {
        return(
            <div className="per-ele">
                <div className="top">
                    <h2>{e.title}</h2>
                    <p>{e.desc}</p>
                </div>
                <div className="bottom">
                    {e.link && <a href={e.link} target="blank"><FaLink /></a>}
                    <a href={e.github} target="blank"><FaGithub /></a>
                </div>
            </div>
        )
    })

    return(
        <div className="per-main" id="pproject">
            <h1>Personal Projects</h1>
            <div className="per-holder">{projectsEle}</div>
        </div>
    )
}
import "./Client.css"
import data from "./data.json";
import { FaGithub, FaLink } from "react-icons/fa";


export default function Client(){
    const clientEle = data.map((e) => {
        return(
            <div className="client-ele">
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
        <div className="client-main" id="client">
            <h1>Personal Projects</h1>
            <div className="client-holder">{clientEle}</div>
        </div>
    )
}
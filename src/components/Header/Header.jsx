import { Link } from "react-router-dom"
import "./Header.css"
import logo from "../../img/SR-white-min.png"

export default function Header(){
    return(
        <header>
            <img className="logo" src={logo} alt="Header Logo" />
            <nav>
                <ul className="nav-links">
                    <li><a href="#journey">My Journey</a></li>
                    <li><a href="#exp">Experience</a></li>
                    <li><a href="#pproject">Passion Projects</a></li>
                    <li><a href="#client">My Work with Clients</a></li>
                </ul>
            </nav>
            <a href="https://www.google.ca/" className="cta"><button className="header-btn">Contact</button></a>
        </header>
    )
}
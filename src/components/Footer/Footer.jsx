import "./Footer.css"

export default function Footer(){
    return(
        <div className="footer">
            <p>© {(new Date().getFullYear())} - Seyon Ranjithkumar</p>
        </div>
    )
}
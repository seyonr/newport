import "./Contact.css"

export default function Contact(){
    const apiKey = import.meta.env.VITE_EMAIL_KEY;

    return(
        <div className="contact-main" id="contact">
            <h1>Contact Me!</h1>
            <form action="https://api.web3forms.com/submit" method="POST">
                <input type="hidden" name="access_key" value={apiKey}></input>
                <input type="text" name="name" placeholder="James Bond" className="contact-input"/>
                <input type="email" name="email" placeholder="jb@gmail.com" className="contact-input"/>
                <textarea name="message" placeholder="This is a highly confidential message." className="contact-input"></textarea>
                <div className="button-holder"><button type="submit">Send</button></div>
            </form>
        </div>
    )
}
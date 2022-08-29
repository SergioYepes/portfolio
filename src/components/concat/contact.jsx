import "./contact.css"
import { AiOutlineYoutube } from "react-icons/ai"
import { AiOutlineWhatsApp } from "react-icons/ai"
import { AiOutlineInstagram } from "react-icons/ai"
import { AiOutlineFacebook } from "react-icons/ai"

export default function Contact(){
    return( 
        <div id="contact" className="container contact-container">
            <h1>Contact me</h1>
            <div className="contact-links">
                <a href="https://www.youtube.com/channel/UCPpkQjJ-XFk_g7PSsjd8FfQ" className="contact youtube">
                    <AiOutlineYoutube className="icon"/>
                    <h2>Youtube: <span>ElGatoban</span></h2>
                </a>

                <a href="https://wa.link/o0osge" className="contact whats">
                    <AiOutlineWhatsApp className="icon"/>
                    <h2>Whatsapp: <span>3224293068</span></h2>
                </a>

                <a href="https://www.instagram.com/elgatoban/" className="contact instagram">
                    <AiOutlineInstagram className="icon"/>
                    <h2>instagram: <span>ElGatoban</span></h2>
                </a>

                <a href="https://www.facebook.com/ArSd.kira.rammstein.lml/" className="contact face">
                    <AiOutlineFacebook className="icon"/>
                    <h2>Facebook:<br/> <span>Sergio Ivan Yepes</span></h2>
                </a>

                
            </div>
        </div>

    )
}
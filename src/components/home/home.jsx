import "./home.css"
import img from "../props/samivv.jpg"
import {BsMouse} from "react-icons/bs"
import Buttons from "../boton/button"
import { useEffect } from "react"
 function Home(){
    // const getSpiner=()=>{
        // const toggle= document.querySelector(".main-img");
        // toggle?.addEventListener('click',()=>{toggle.classList.toggle("active")});
    // }
    useEffect(()=>{
        const toggle= document.querySelector(".main-img");
        toggle?.addEventListener('click', () => {
        toggle.classList.toggle("active")});
    },[])

    return(
        <div id="home" className="container home-container">
            <div className="logo">
                <div className="main-img">
                    <span className="circle"></span>
                    <span className="circle"></span>
                    <span className="circle"></span>
                    <span className="circle"></span>
                    <span className="circle"></span>
                    <span className="circle"></span>
                    <span className="circle"></span>
                    <span className="circle"></span>
                </div>
                <img src={img} alt="none"></img>
            </div>
            
            <a href="#footer" className="scroll-down">
                <hr></hr>
                <h5>scroll down</h5>
                <BsMouse className="scroll"/>
                <hr></hr>
            </a>
            <h2><span>About me</span><br/>
            <p>I am a 24-year-old young man who wants to give the best improving in development to people,
             I am a kind, helpful, responsible and respectful person with others, 
             I am a person who loves languages, video games, History and economy. 
             I would say that I love it, I would like to study Economics in the future abroad.
            In addition to the fact that I am a person who wants to give his best performance,
            I like to improve the production of the company in which I am working, 
            I am a person who likes to be friendly with the client and partners by giving a proactive service
             where the customer listens and sees that has been treated with professional service!</p>
            </h2>
            <Buttons/>
        </div>
    )
    
}



export default Home
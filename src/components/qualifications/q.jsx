import "./q.css"
 const Qss=() =>{
    return(
        <div>
            <span className="quali-text">
                My Qualifications
            </span>
            <div className="qualifications-container">
               <div className="qualification">
                   <div className="content html"></div>
                   <h1>html</h1>
                   </div>
                <div className="qualification">
                   <div className="content css"></div>
                   <h1>css</h1>
                   </div>  
                <div className="qualification">
                   <div className="content js"></div>
                   <h1>JavaScript</h1>
                </div><div className="qualification">
                   <div className="content java"></div>
                   <h1>java</h1>
                </div><div className="qualification">
                   <div className="content react"></div>
                   <h1>react</h1>
                   </div><div className="qualification">
                <div className="content cmas"></div>
                   <h1>C++</h1>
                   </div><div className="qualification">
                <div className="content python"></div>
                   <h1>python</h1>
                   </div><div className="qualification">
                <div className="content mongoDB"></div>
                   <h1>MongoDb</h1>
                   </div>
            </div>
        </div>
    )
}
export default Qss
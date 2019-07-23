import React from "react";
import "./Cardstyle.css";
const App=(props)=>{
    return(
        <div className="card text-center shadow">
            <div className="overflow">
             <img src={props.imgsrc} alt="image 1" className="card-img-top"/>
            </div>
            <div className="card-body text-dark">
             <h4 calssNmae="card-title"> {props.title} </h4>
             <p className="card-text text-secondary">
                 zian is the student of pucit.
             </p>
             <a href="#" className="btn btn-outline-success">Go anywhere</a>
            </div>
        </div>

    );
}
export default App;
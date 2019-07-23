import React,{Component} from "react";
import App from "./App";
class Card extends Component{
    render(){
        return(
           <div ClassName="container-fluid d-flex justify-content-center">
               <div className="row">
                  <div className="col-md-3">
                      <App imgsrc={process.env.PUBLIC_URL+"/tour1.jpg"} title="Tour1"/>
                  </div>
                  <div className="col-md-3">
                      <App imgsrc={process.env.PUBLIC_URL+"/tour2.jpg"} title="Tour2"/>
                  </div>
                  <div className="col-md-3">
                      <App imgsrc={process.env.PUBLIC_URL+"/tour3.jpg"} title="Tour3"/>
                  </div>
                 
               </div>

           </div>
        )
    }
}
export default Card;

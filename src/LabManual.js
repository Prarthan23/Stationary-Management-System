import  React from "react";
import './labmanuals.css'
function LabManual(){
    return(
        <div className="container-LB">
            <div className="title">
                <h1>LAB MANUALS</h1>
            </div>
            <div className="main">
                <section className="searchbar">
                    <select className="select-menu">
                        <option>SEM1</option>
                        <option>SEM2</option>
                        <option>SEM3</option>
                        <option>SEM4</option>
                        <option>SEM5</option>
                        <option>SEM6</option>
                        <option>SEM7</option>
                    </select>
                    <input type="search" placeholder="Search Here"></input>
                </section>
            </div>
            <div className="pdf-files">
                <div className="pdf-cards">
                    
                </div>
            </div>
        </div>
    )
}
export default LabManual;
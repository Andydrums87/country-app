import React, {useState} from "react";
import "./checkbox.css"

function Checkbox({handleChecked, handleIndChecked}) {


    return (
        <div className="checkbox__container">
                    <input type="checkbox" className="input" onChange={handleChecked}/>
                    <label htmlFor="Memberof the United Nations">Memberof the United Nations</label> 
                    <br />
                    <input type="checkbox" className="input"  onChange={handleIndChecked}/>
                    <label htmlFor="Memberof the United Nations">Independent</label>   
        </div>
    )
}

export default Checkbox;
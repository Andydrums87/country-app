import React, {useState} from "react";
import "./dropdown.css"

function Dropdown({sortData, handleSelect}) {
  
    return (
        <div>
            <p className="dropdown__title">Sort By</p>
            <select name="sort by" id="dropdown" value={sortData} onChange={(e) => handleSelect(e.target.value)}> 
            <option value="population">Population</option>
            <option value="area">Area(km2)</option>
            <option value="name">Name</option>
        </select>
        </div>

    )
}

export default Dropdown;
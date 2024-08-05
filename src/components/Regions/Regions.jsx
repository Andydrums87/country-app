import React, { useState, useEffect } from "react";
import "./regions.css"

function Regions({handleRegions, selectedFilters}) {

    let filters = ["Americas", "Antarctic",  "Asia", "Africa", "Europe", "Oceania" ]

        
    return (
        <div>
            <p className="regions__title">Region</p>
        <ul className="regions__list">
        {filters.map((region, index) => (
                     <li key={index}><button  
                     onClick={() => handleRegions(region)} 
                     className={`region__btn ${selectedFilters?.includes(region) ? "active" : ""}`} 
                     key={`filters-${index}`}
                    >
                     {region}
                     </button></li>
  ))} 
        </ul>
          
        </div>
    )
}
export default Regions;

  {/* <ul className="regions__list">
                <li><button  className={`region__btn ${selectedFilters.includes("Americas") ? "active" : ""}`} value="Americas" onClick={(e) => handleRegions(e.target.value)}>Americas</button></li>
                <li><button className={`region__btn ${selectedFilters.includes("Antarctic") ? "active" : ""}`}value="Antarctic" onClick={(e) => handleRegions(e.target.value)}>Antarctic</button></li>
                <li><button className={`region__btn ${selectedFilters.includes("Africa") ? "active" : ""}`}value="Africa" onClick={(e) => handleRegions(e.target.value)}>Africa</button></li>
                <li><button className={`region__btn ${selectedFilters.includes("Asia") ? "active" : ""}`}value="Asia" onClick={(e) => handleRegions(e.target.value)}>Asia</button></li>
                <li><button className={`region__btn ${selectedFilters.includes("Europe") ? "active" : ""}`}value="Europe" onClick={(e) => handleRegions(e.target.value)}>Europe</button></li>
                <li><button className={`region__btn ${selectedFilters.includes("Oceania") ? "active" : ""}`}value="Oceania" onClick={(e) => handleRegions(e.target.value)}>Oceania</button></li> 
                </ul> */}

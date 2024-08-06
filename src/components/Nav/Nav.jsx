import React, { useState } from "react";
import "./nav.css"

function Nav({countries, allCountryData, setCountries}) {

    const [filterRegion, setFilterRegion] = useState([])

    const [userInput, setUserInput] = useState('')

    const handleSearch = () => {
    
    const countryToDisplay = allCountryData.filter((item) => item.name.common.toLowerCase().includes(userInput.toLowerCase()) 
    || 
    item.region.toLowerCase().includes(userInput.toLowerCase())
    // ||
    // item.subregion.toLowerCase().includes(userInput.toLowerCase())
)
   
    userInput === "" ? setCountries(allCountryData) : setCountries(countryToDisplay) 

    }
 
   const handleOnChange = (e) => {
      e.key === "Enter" && handleSearch()
 
   } 

 
    return (
        
        <div className="nav__container">
               <p className="nav__title">Found {countries.length} countries</p>
               <input className="search__bar"  onKeyDown={handleOnChange} onChange={(e) => setUserInput(e.target.value)} type="text" placeholder="Search by Name, Region, Subregion" />
        
        </div>
     
    )
}

export default Nav;
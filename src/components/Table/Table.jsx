import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import "./table.css"



function Table ({countries, firstIndex, lastIndex, loading}) {

const navigate = useNavigate()

const [clickedRecipe, setClickedRecipe] = useState()
const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
  });



const handleClick = (clickedRecipe) => {
       console.log(clickedRecipe)

    const url = `https://restcountries.com/v3.1/name/${clickedRecipe}`
    
    fetch(url)
        .then( response => response.json())
            .then(data => {
                console.log(url)
                navigate('/country', {state: {countryData: data[0]}})
            })
}

    const records = countries.slice(firstIndex, lastIndex)


    return (
    
        <div className="table_component" role="region" >
     
 <div className="table_data_container">
 {loading ? <p style={{color:"white"}}>...loading</p> : null}
 <table>
        <thead>
            <tr>
                <th>Flag</th>
                <th>Name</th>
                <th>Population</th>
                <th>Area km2</th>
                <th>Region</th>
            </tr>
        </thead>
        <tbody>
 {records.map((country, index) => {
    return (
    <tr className="row" key={index}>
       <td><button className="link"onClick={(e) => {handleClick(country.name.official); setClickedRecipe(country.name.official)}}><img className="flag__img" src={country.flags.svg} alt="flag" /></button></td>
       <td>{country.name.common}</td>
       {/* <td>{country.population.toString().length > 8 ? `${country.population.toLocaleString().slice(0, 8)}` + "..." : country.population.toLocaleString()}</td> */}
       <td>{country.population.toLocaleString()}</td>
       <td>{country.area.toLocaleString()}</td>
       <td>{country.region}</td>
       </tr>
    
      




        
       
     
    )
   
})}
  </tbody>
 </table>
 </div>

           

        </div>
 
    )
}

export default Table;

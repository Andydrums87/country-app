import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "./countrypage.css"
import Header from "../components/Header/Header";
// import Header from "../components/Header/Header";








function CountryPage() {
  
    // const param = useParams()
    const location = useLocation()
    const navigate = useNavigate()
    const [countries, setCountries] = useState(location.state.countryData)
    const [allCountries, setAllCountries] = useState([])
    const [isLoading, setLoading] = useState(false)




useEffect(() => {
    setCountries(location.state.countryData)
},[])

useEffect(() => {
     setLoading(true)
    fetch('https://restcountries.com/v3.1/all')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
     
        setAllCountries(data);
        console.log(allCountries)
        setLoading(false)
      });
    }, []);


     
const handleClick = (selectedName) => {
  setLoading(true)
   console.log(selectedName)
   fetch(`https://restcountries.com/v3.1/name/${selectedName}`)
   .then((res) => {
     return res.json();
   })
   .then((data) => {
     setCountries(data[0]);
     setLoading(false)
   });
}

const handleBack = () => {
    navigate("/")
}




    return (

        <div className="container__country__page">       
            <Header />
          <div className="country__content__container">
          {isLoading ? <p style={{color:"white"}}>...loading</p> : null}
               <div className="content">
                <div className="flag__container">
                <img id="flag__img" src={countries.flags.png} alt="" />
                </div>

                    <h1 className="country__name__common">{!countries.name.common ? "" : countries.name.common}</h1>  
                        <h1 className="country__name__official">{!countries.name.official ? "" : countries.name.official}</h1>
                        <ul className="population__area">
                <li className="list__item">
                   <span id="span__left">Population</span><span>{!countries.population ? "" : countries.population.toLocaleString()}</span>
                </li>
                 <li className="list__item">
                <span id="span__left">Area(km&#178;)</span> <span>{!countries.area ? "" : countries.area.toLocaleString()}</span>
                </li>
               </ul>
         <table className="country__page__table">
  <tr className="tr">
    <th className="th">Capital</th>
    <td className="td"> {!countries.capital ? "" : countries.capital}</td>
  </tr>
  <tr className="tr">
    <th className="th">Subregion</th>
    <td className="td">{!countries.subregion ? "" : countries.subregion}</td>
  </tr>
  <tr className="tr">
    <th className="th">Language</th>
    <td className="td">{!countries.languages ? "" : Object.values(countries.languages) + ""}</td>
  </tr>
  <tr className="tr">
    <th className="th">Currencies</th>
    <td className="td">{!countries.currencies ? "" : Object.values(countries.currencies)[0].name}</td>
  </tr>
     <tr className="tr">
    <th className="th">Region</th>
  
    <td className="td">
{countries.region}
    </td>
    
  </tr>


</table> 
<div className="hello">
{countries.borders && allCountries.filter((item) => countries.borders.includes(item.cca3)).map((d, index) => {
return  ( 
            <figure className="figure" key={index} >
                <img onClick={(e)=>handleClick(d.name.common)} id="border__flag"src={d.flags.png} alt="" />
                <figcaption>{d.name.common}</figcaption>
            </figure>

          


)
   
  })
}

</div>
  

<button className="return__btn"onClick={handleBack}>Go Home</button>

 
                </div>

                

                  
              
            </div>   
        </div>
    
    )
}

export default CountryPage;
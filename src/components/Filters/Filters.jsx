// import React, { useState, useEffect } from "react";
// import "./regions.css"

// function Filters ({countries, allCountryData, setCountries, setAllCountryData}) {
// const [filteredItems, setFilteredItems] = useState([...allCountryData])
// const [selectedFilters, setSelectedFilters] = useState([])
//     let filters = ["Americas", "Europe", "Asia"]

//     const handleFilterButtons = (selectedRegion) => {

      
//         if(selectedFilters.includes(selectedRegion)) {
//             let filters = selectedFilters.filter((el) => el !== selectedRegion)

//             setSelectedFilters(filters)
//         } else {
//             setSelectedFilters([...selectedFilters, selectedRegion]);
//         }


//         useEffect(() => {
//             filterItems()
//         }, [selectedFilters])
//     }

//     const filterItems = () => {
//         if(selectedFilters.length > 0) {
//             // let tempItems = selectedFilters.map((selectedRegion) => {
//             //     let temp = allCountryData.filter((item) => item.region === selectedRegion)
//             //     return temp
//            const filtered = allCountryData.filter(item => {return item.region === selectedRegion})
//             setFilteredItems(filtered)
//             }
//          else {
//             setFilteredItems([...countries])

//         }
//     }
//     return (
//         <div>
//                        <p className="regions__title">Region</p>
//                        <ul className="regions__list">
//                        {filters.map((region, index) => (
//                      <li key={index}><button  
//                      onClick={() => handleFilterButtons(region)} 
//                      className={`region__btn ${selectedFilters?.includes(region) ? "active" : ""}`} 
//                      key={`filters-${index}`}
//                     >
//                      {region}
//                      </button></li>
//   ))} 
//       </ul>
//       </div>

//     )
// }

// export default Filters;
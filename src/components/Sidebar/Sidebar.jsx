import React, {useEffect, useState} from "react";
import "./sidebar.css"
import Dropdown from "../Dropdown/Dropdown";
import Regions from "../Regions/Regions";
import Checkbox from "../Checkbox/Checkbox";


function Sidebar ({countries,  setCountries, allCountryData}) {

    const [sortData, setSortData] = useState()
    const [filteredItems, setFilteredItems] = useState(allCountryData)
    const [selectedFilters, setSelectedFilters] = useState([])

    const handleRegions = (selectedRegion) => {
        
        if(selectedFilters.includes(selectedRegion)) {
            let filters = selectedFilters.filter((el) => el !== selectedRegion)
                    setSelectedFilters(filters)
                } else {
                   setSelectedFilters([...selectedFilters, selectedRegion]);
                }
      };

      const handleChecked = (e) => {
        const arr = [...countries]
        const filtered = arr.filter(item => item.unMember === true)
     
                if(e.target.checked) {
                    setCountries(filtered)
                    // console.log([...countries, ...filteredNot])
                
                } else  {
                    setCountries([...filteredItems])
                }

    
            }
            const handleIndependentChecked = (e) => {
                const arr = [...countries]
                const isIndependent = arr.filter(item => item.independent === true)
             
                        if(e.target.checked) {
                            setCountries(isIndependent)
                           
                        
                        } else  {
                            setCountries([...filteredItems])
                        }
        
            
                    }

      useEffect(() => {
        filterItems()
    }, [selectedFilters])

            const filterItems = () => {
                if(selectedFilters.length > 0) {
                    let tempItems = selectedFilters.map((selectedRegion) => {
                        let temp = allCountryData.filter((item) => item.region === selectedRegion)
                        
                        return temp;
                      
                    });
                //    let filtered = allCountryData.filter(item => {return item.region === selectedRegion})
   
                    setFilteredItems(tempItems.flat())
                    setCountries(tempItems.flat())
                    
                } else {
                    setFilteredItems([...allCountryData])
                    setCountries([...allCountryData])
        
                }
            
            }

    const handleSelect = (sortData) => {
        const population = [...countries]
        const area = [...countries]
        const name = [...countries]
        const sortName = [...name].sort((a, b) => a.name.common.localeCompare(b.name.common))
        const sortArea = [...area].sort((a, b) => b.area - a.area)
        const sortPopulation = [...population].sort((a, b) => b.population - a.population)
        if(sortData === "area") {
            setCountries(sortArea)
        } if (sortData === "name") {
            setCountries(sortName)
        } if (sortData==="population") {
            setCountries(sortPopulation)
        }
      }


   
 


                
           



  
 
    
    return (
     <div className="sidebar__container">
        <Dropdown sortData={sortData} handleSelect={handleSelect} setSortData={setSortData}/>
        <Regions handleRegions={handleRegions} selectedFilters={selectedFilters} />
        <Checkbox handleChecked={handleChecked} handleIndChecked={handleIndependentChecked} />
     </div>
    )
}

export default Sidebar;
import React, { useState, useEffect } from 'react'
import Header from '../components/Header/Header'
import Nav from '../components/Nav/Nav'
import Sidebar from '../components/Sidebar/Sidebar'
import Table from '../components/Table/Table'
import Pagination from '../components/Pagination/Pagination'


function Home() {

  const [countries, setCountries] = useState([])
  const [allCountryData, setAllCountryData] = useState([]);
  const [filteredData, setFilteredData] = useState([])
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    fetch('https://restcountries.com/v3.1/all')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
     
        setCountries(data.sort((a, b) => b.population - a.population));
        setAllCountryData(data.sort((a, b) => b.population - a.population));
       setLoading(false)
      });
    }, []);


    const [currentPage, setCurrentPage] = useState(1)
    const [recordsPerPage, setRecordsPerPage] = useState(20)
    const lastIndex = currentPage * recordsPerPage;
    const firstIndex = lastIndex - recordsPerPage
  
    const nPage = Math.ceil(countries.length / recordsPerPage)
    const numbers = [...Array(nPage + 1).keys()].slice(1)

   
  
  

    const goToNextPage = () => {
      if(currentPage !== nPage) 
          setCurrentPage(currentPage + 1)
  
        
  
  }
  
  const goToPrevPage = () => {
      if(currentPage !== 1) 
          setCurrentPage(currentPage -1)
  }

  return (

    <div className="container">
          <Header />
          <div className="content__container">
            <Nav countries={countries} allCountryData={allCountryData} setCountries={(setCountries)}/>
            <div className="main__content">
               <Sidebar countries={countries} setCountries={setCountries} allCountryData={allCountryData} setAllCountryData={setAllCountryData}/>
               <Table firstIndex={firstIndex} lastIndex={lastIndex} countries={countries} allCountryData={allCountryData} loading={loading}/> 
            </div>
            <Pagination numbers={numbers}goToNextPage={goToNextPage} goToPrevPage={goToPrevPage} nPage={nPage} setCurrentPage={setCurrentPage} currentPage={currentPage}/>
          </div>   

    </div>


  )

}

export default Home;
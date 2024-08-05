import React, {useState} from "react";
import './pagination.css'

function Pagination({numbers, goToNextPage, goToPrevPage, nPage, setCurrentPage, currentPage}) {

  

    return (
        <ul id="my__list" className="pagination">
            <li>
                <button className="btn__pagination" 
                onClick={goToPrevPage}>
                   <i className="fa-solid fa-chevron-left"></i>
                </button>
            </li>
            {numbers.map((n, i) => {
                return (
                    <li key={i}>
                        <button className={currentPage -1 === i  ? 'activePage' : 'btn__pagination'} onClick={()=>setCurrentPage(n)}>
                              {n}
                        </button>
                    </li>
                )
            })}
            <li >
                <button className="btn__pagination" onClick={goToNextPage}>
                <i className="fa-solid fa-chevron-right"></i>
                </button>
            </li>
        </ul>
    
    
    )
}

export default Pagination;
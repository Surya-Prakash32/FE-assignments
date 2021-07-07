import React from 'react'

export default function Header({changeRegion,changeCountry}) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">Country List</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Regions
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a className="dropdown-item" onClick= {()=>{changeRegion('All')}} >All</a></li>
                    <li><a className="dropdown-item" onClick= {()=>{changeRegion('Africa')}} >Africa</a></li>
                    <li><a className="dropdown-item" onClick= {()=>{changeRegion('America')}} >America</a></li>
                    <li><a className="dropdown-item" onClick= {()=>{changeRegion('Asia')}} >Asia</a></li>
                    <li><a className="dropdown-item" onClick= {()=>{changeRegion('Europe')}} >Europe</a></li>
                    <li><a className="dropdown-item" onClick= {()=>{changeRegion('Oceania')}} >Oceania</a></li>
                </ul>
                </li>

            </ul>
            <div className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange= {(Event) => {changeCountry(Event.target.value)}}/>

            </div>
            </div>
        </div>
        </nav>
    )
}

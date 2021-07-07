import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from "react";
import Cards from "./MyComponenets/Cards"
import Header from "./MyComponenets/Header"

function App() {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState(null);
  const [region, setRegion] = useState(null);
  const [url, setUrl] = useState("https://restcountries.eu/rest/v2/all");
  const [hasError, setHasError] = useState(false)

  
  const changeRegion = (region) =>{
    if (region !== "All"){
      setRegion(region)
      setUrl(`https://restcountries.eu/rest/v2/region/${region}`);
    }else{
      setRegion(null)
      setUrl("https://restcountries.eu/rest/v2/all");
    }
    console.log(region)
  }

  const changeCountry = (country) =>{
    console.log(country)
    if(!country){
      setUrl("https://restcountries.eu/rest/v2/all");
    }else{
      setSearch(country)
      setUrl(`https://restcountries.eu/rest/v2/name/${country}`);
    }

  }

  //componentDidMount
  useEffect(() => {
    console.log("hook called",url)
    // fetch(url)
    // .then(res => res.json())
    // .then(res => {
    //   setCountries(res);
      
    // })
    
    fetch(url)
    .then ((res)=>{
      console.log("status",res.status)
      if (res.ok){
        setHasError(false)
        res.json()
        .then(res => {
          setCountries(res)

        })
      }else{
        setCountries(null)
        setHasError(true)
      }

    }).catch(error =>{
      setHasError(true)
    });

  },[region,search]);

  

  return (
    <div className="App">
      <Header changeRegion={changeRegion} changeCountry={changeCountry}/>
      
        {
          !countries ? <div>Error occured</div> : 
          countries.map((country) => {
            return <Cards country={country} key={country.name}/>
          })
        }
        
      
        {/* {countries.map((country) => {
          // return <Cards name={country.name} flag={country.flag} key={country.name}/>
          return <Cards country={country} key={country.name}/>
          // return <p>{country.name }
          //         <img src={country.flag} alt="" />
          //         </p> 
        })} */}
       
       {/* {hasError ? <div>Error occured</div> : (
         countries.map((country) => {
          return <Cards country={country} key={country.name}/>
        })
       )} */}
        
      
    </div>
  );
}

export default App;

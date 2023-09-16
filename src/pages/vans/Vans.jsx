import React from "react"
import { Link, useSearchParams } from "react-router-dom"
import Button from "../../components/Button"

export default function Vans() {
    const [searchParams, setSearchParams] = useSearchParams()
    const [vans, setVans] = React.useState([])
    
    const typeFilter = searchParams.get("type")
    
    React.useEffect(() => {
        fetch("/api/vans")
            .then(res => res.json())
            .then(data => setVans(data.vans))
    }, [])
    
    const displayedVans = typeFilter
        ? vans.filter(van => van.type === typeFilter)
        : vans

    const vanElements = displayedVans.map(van => (
        <div key={van.id} className="van-tile">
            <Link to={van.id}>
                <img src={van.imageUrl} />
                <div className="van-info">
                    <h3>{van.name}</h3>
                    <p>${van.price}<span>/day</span></p>
                </div>
                <i className={`van-type ${van.type} selected`}>{van.type}</i>
            </Link>
        </div>
    ))


    return (
        <div className="van-list-container">
            <h1>Explore our van options</h1>
            <div className="van-list-filter-buttons">
                <Link 
                    to="?type=simple"
                    className="van-type simple"
                >Simple</Link>
                <Link 
                    to="?type=luxury"
                    className="van-type luxury"
                >Luxury</Link>
                <Link 
                    to="?type=rugged"
                    className="van-type rugged"
                >Rugged</Link>
                <Link 
                    to="."
                    className="van-type clear-filters"
                >Clear filter</Link>
                {/* <Button 
                type={`${Vans.type}`}
                handleClick={()=>setSearchParams({type:`${vans.type}`})} /> */}
                {/* {vans.map(van=>{
                    for(var i=0;i<3;i--){
                        return(
                            <Button
                            type={`${van.type}`}
                            handleClick={()=>setSearchParams({type:`${van.type}`})}
                             />
                          )
                    }
                 
                })}
              <h5  className="van-type clear-filters" onClick={()=>setSearchParams({})}>Clear All</h5> */}
            </div>
            <div className="van-list">
                {vanElements}
            </div>
        </div>
    )
}
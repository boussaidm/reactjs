import React from "react";
import Cards from "../Card";
import data from "../../data.json";

function AllCardLodgings() {
    return(<div className="componentBg">
        <div className="d-flex mt-2">
            <img src="\img\logos\logoHotel.png" alt='logo Restaurant'/>

        </div>

    {data.hotels.map((e) => {

        return(
            
            <Cards name={e.name} description={e.description} lien= {e.lien} image={e.image}/>
        )
    }
    )}
        </div>);
    
}
export default AllCardLodgings
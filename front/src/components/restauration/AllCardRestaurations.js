import React from "react";
import Card from "../Card";
import data from "../../data.json";

function AllCardRestaurations() {

    return(<div className="componentBg"> 
        <div className="d-flex mt-2">
        <img src="\img\logos\logoResto.png" alt='logo logo Restauration'/>

        </div>  

        {data.restaurants.map((e) => {
            return(
                <Card name={e.name} description={e.description} lien= {e.lien} image={e.image}/>
            )
        }
        )}
        </div>
)}
    
export default AllCardRestaurations;

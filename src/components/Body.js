import { useState } from "react";
import restList from "../utils/mockData";
import ResturantCard from "./ResturantCard";


const Body = () =>{
    const [listOfResturant, setListofResturant] = useState(restList);
 
    return(
        <div className="body">
            <div className="filter-btn">
                <button className="" onClick={()=>{
                    const filteredList= listOfResturant.filter(
                        (res)=>res.info.avgRating>4
                    );
                    setListofResturant(filteredList);
                }}>Top Rated Resturant</button>
            </div>
            <div className="resturant-container">
              { listOfResturant.map(resturants => <ResturantCard key= {resturants.info.id} restData={resturants}/>
              )}
            </div>
        </div>
    )
}
export default Body;
const ResturantCard = (props) =>{
    const{restData} = props;
    const{cloudinaryImageId,name ,cuisines,avgRatingString,costForTwo} = restData?.info;
    return(
         <div className="rest-card"> 
            <img src={cloudinaryImageId} />
            <h3>{name}</h3>   
            <h4>{cuisines.join(", ")}</h4>   
            <h4>{avgRatingString}Stars</h4>
            <h4>{costForTwo / 100} </h4>
        </div>
    )
}
export default ResturantCard;
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import "./Detail.css"
import RatingStart from "../RatingStar/RatingStart";

const Details = () => {

    const { id } = useParams()

    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)
    const [item, setItem] = useState()
    const [count, setCount] = useState(0)
    
    const onClicked = () => {
            setItem((previous) => ({...previous, data}))
    }

    console.log(item)

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`, { mode: 'cors'})
            .then(res=>{
                if(res.status >= 404){
                    throw new Error("Server error")
                }
                 return res.json()
            })
            .then(json=> setData(json))
            .catch(() => setError(error))
            .finally(() => setLoading(false))
    },[id])

   
    return (
        <div>
            {loading && <div>Data loading...</div>}
            {error && (<div>{`There is a problem fetching the post data - ${error}`}</div>)}
            {data && (                
                <div className="details-card">
                    <div className="img-card">
                        <img src={data.image} alt={data.title} />
                    </div>
                    <div className="details-detail">                        
                        <p className="title">{data.title}</p>
                        <p><span>Category: </span>{data.category}</p>
                        <p><span>Price: </span>${data.price}</p> 
                        <p className="desc"><span>Description: </span>{data.description}</p> 
                        <RatingStart stars={data.rating.rate} view={data.rating.count} /> 
                        <button 
                            type="submit" 
                            className="addCart"
                            onClick={onClicked}
                        >
                            Add to cart
                        </button>                      
                    </div>
                </div>
            )}
        </div>
    )
}
export default Details;
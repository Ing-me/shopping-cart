import { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import "./ProductList.css"
import RatingStart from "../RatingStar/RatingStart";
import ButtonBuy from "../Button/ButtonBuy";
import { Link } from "react-router-dom";

const ProductLists = () => {

    const [products, setProducts] = useState(null)
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('https://fakestoreapi.com/products', { mode: 'cors'})
            .then(res=>{
                if(res.status >= 404){
                    throw new Error("Server error")
                }
                 return res.json()
            })
            .then(json=> setProducts(json))
            .catch(() => setError(error))
            .finally(() => setLoading(false))
    },[])
    console.log(products)

    return (
        <div className="cards">
            {loading && <div>Data loading...</div>}
            {error && (
                <div>{`There is a problem fetching the post data - ${error}`}</div>
            )}
            {products &&
                products.map(product => (
                    <Link to={`/details/${product.id}`} key={product.id} className="card">
                       <div className="card-title">
                            <img className="card-image" src={product.image} alt={product.title} />
                        </div>
                        <div className="card-body">
                            <p className="title">{product.title}</p>
                            <p className="title"><span>Category:</span> {product.category}</p>
                            <p className="title"><span>Price:</span> ${product.price}</p>
                            <div>
                                <RatingStart stars={product.rating.rate} view={product.rating.count} />
                            </div>
                        </div>
                    </Link>
                ))
            }
            
        </div>
    )
}
export default ProductLists;
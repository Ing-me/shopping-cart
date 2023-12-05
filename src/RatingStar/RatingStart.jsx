import { FaStar, FaRegStarHalfStroke, FaRegStar } from "react-icons/fa6";
const RatingStart = ({stars,view}) => {

    const rating = Array.from({ length:5 }, (el,index) =>{
        let number = index + 0.5
        console.log(number)
        return (
            <span key={index}>
                {stars >= number + 1 ? (
                    <FaStar className="icon"/>
                ) : stars >= number ? (
                    <FaRegStarHalfStroke  className="icon"/>
                ) : (
                    <FaRegStar className="icon"/>
                )
                }
            </span>
        )
    })

    return (
        <div>
            {rating}({view})
        </div>
    )
   
}
export default RatingStart;
import { Link } from "react-router-dom"
import "./ErrorPage.css"

const ErrorPage = () => {
    return(
        <div className="errorPage">
            <h1>Oh no! This route doesn't exist</h1>
            <Link className='link-error' to="/">
                Click here to go back, though
            </Link>
        </div>
    )
}

export default ErrorPage;
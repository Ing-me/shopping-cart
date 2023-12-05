import Home from "../Home/Home";
import { Outlet } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";

const App = () => {
    return(
        <>
            <Navigation />

            <Outlet />

            <Footer/>
        </>
    )
}

export default App;
import {FaBuffer} from 'react-icons/fa6'
import Login from '../Login/Login';
import { useEffect } from 'react';

const Home = () => {

    useEffect(() => {
        try{
            fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>console.log(json))
        } 
        catch(err){
            console.log(err)
        } 
        finally{
            console.log("I am here")
        }
    },[])
    return(
        <Login/>
    )
}
export default Home;
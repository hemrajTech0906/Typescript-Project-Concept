import React, { useState ,useEffect} from 'react'

import { IDetails } from '../models/Details'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
interface IState{
    user:IDetails,
    loading:boolean,
    errorMessage?:string,
}
interface Iparams{
    id:string
}


const Details:React.FC = () => {
    const {id}=useParams<Iparams|any>()
    console.log(id,"-------hh-------")
const [state,setState]=useState<IState>({
   
    loading:false,
    user:{} as IDetails,
    errorMessage:""

})
console.log(state)

useEffect(() => {
    let getApiData = async () => {
      try {
        let responce = await axios.get<IDetails>(
          `https://jsonplaceholder.typicode.com/users/${id}`
        );
        //console.log(responce)     
           //console.log(responce.data);
        setState({ user: responce.data,loading: false });
      } catch (error) {
        console.log("Error fetching data", error);
      }
    };
    getApiData();
  }, [id]);

  const {loading,user,errorMessage}=state
  return (
    <div>
        <h1>Tech-G Detailspage</h1>
        <h3>useparam:{id}</h3>
        <div>
          {loading&&<h1>Loading.....</h1>}
          {errorMessage&&<h1>{errorMessage}</h1>}
          {Object.keys(user).length >0 &&(
            <div>
               <h1>UserDetailsData</h1>
               <h2>
                <ul>
                <li>NAME :  {user.name}</li>
                <li>Email:  {user.email}</li>
                <li>PHONE:  {user.phone}</li>
                <li>USERNAME :  {user.username}</li>
                <li>WEBSITE :  {user.website}</li>
                <li>city :  {user.address.city}</li>
                <li>street :  {user.address.street}</li>
                <li>suite :  {user.address.suite}</li>
                <li>zipcode :  {user.address.zipcode}</li>

                </ul>
                
                </h2>


                <Link className="nav-link disabled" to={"/userlist"}>
                  <button>backToList</button></Link>
     

              
            </div>
          )}
        </div>
    </div>
  )
}

export default Details
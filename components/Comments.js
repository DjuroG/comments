import axios from "axios";
import { useEffect, useState } from "react";
import Loader from "./Loader";
import {useNavigate } from "react-router-dom";

export default function Comments () {
    
    const [comments, setComments] = useState([]);

    const [isLoading, setIsLoading] = useState(true);

    const navigate = useNavigate();


        useEffect(()=>{
            // getComments();
            // Ako želimo Timeout, on se stavlja ovde dole, zato što 
            // se ovde poziva metoda koju želimo da odložimo - ovde je to metoda "getComments"
            setTimeout(() => {getComments()}, 1500)
            
        },  []);
        
        const getComments = async() => {
            
            
            const url = "https://jsonplaceholder.typicode.com/comments";
            const response = await axios.get(url);

            // napunimo State sa response-om "data" zasto sto je Axios
            setComments(response.data);
            // console.log("response", response);

            setIsLoading(false);
            
        };

        
        // console.log("return", comments);

        const handleClickDetails = (id) => {
            // console.log("id ", id);
            const linkTo = `./details/${id}`;
            navigate(linkTo);
        }

        if(isLoading) {
            return <Loader />;
          }
          
          
    return(
      
      <div  className="marg-left">
            <h2>Comments</h2>
            {comments.map((svi) => {
      // console.log(svi);

      return (
        // onClick stavljamo na DIV da kada se klikne na njega da ode na detalje i otvori detalje, a "id" stavimo da bi otisao na bas taj id is JSona:
        // kada kliknemo na jedan od tih DIV-ova treba da nam ode na detalje tog DIV-a
      <div key={svi.id} onClick={ () => handleClickDetails(svi.id)} >
        <h2>id : {svi.id}</h2>
        <p>Ime: {svi.name}</p>
      </div>

      )}
      )};
        </div>

    );
}
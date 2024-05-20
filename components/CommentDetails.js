import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "./Loader";


export default function CommentDetails () {

    // dobijamo Objekat {} (ne niz[] sada) zato se u useState ovo stavlja :
    const [CommentDetails, setCommentDetails] = useState({});

    const [isLoading, setIsLoading] = useState(true);

    const params = useParams();

    useEffect(()=> {
        // getCommentDetails();

        setTimeout(() => {getCommentDetails()}, 1000)

    }, []);

    const getCommentDetails = async () => {
        // console.log("params", params);

        const id = params.id;
        const url = `https://jsonplaceholder.typicode.com/comments/${id}`;
        const response = await axios.get(url);
        // console.log("response", response);

        setCommentDetails(response.data);

        setIsLoading(false);
    }

    // console.log("return", CommentDetails);

    if(isLoading) {
        return <Loader />;
      }

    return(
        <div  className="marg-left">
            <h2>Comment details</h2>
           
            <p><b>postId :</b> {CommentDetails.postId}</p>
            <p><b>id :</b> {CommentDetails.id}</p>
            <p><b>name :</b> {CommentDetails.name}</p>
            <p><b>email :</b> {CommentDetails.email}</p>
            <p><b>body :</b> {CommentDetails.body}</p>
    
        </div>
    );
}
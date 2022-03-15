import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default () => {
    const [results, setResults] = useState([]);
    const [errMessage, setErrMessage] = useState('');

    
    const searchApi = async searchTerm => {

        try{
            const response = await yelp.get('/search',{
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'san jose'
                }
            });
            
            setResults(response.data.businesses);
        }
        catch(err){
            setErrMessage('Something was  wrong');
        }
    };
    

    //Call searchAPI
    //when component first render
    useEffect(() => {
        searchApi('pasta');
    }, [])
    return [searchApi, results, errMessage];
};
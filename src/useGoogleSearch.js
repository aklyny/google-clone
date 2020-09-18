import {useState,useEffect} from 'react';
import key from './keys';

const CONTEXT_KEY ='be1f4cdd4232476b2';

const useGoogleSearch =(term)=>{
    const [data,setData] = useState(null)

    useEffect(()=>{
        const fetchdata = async ()=>{
            fetch(`https://www.googleapis.com/customsearch/v1?key=${key}&cx=${CONTEXT_KEY}&q=${term}`)
            .then(res=>res.json())
            .then(result=>{
                setData(result)
            })
        }
        fetchdata()
    },[term])
    return {data}
}


export default useGoogleSearch;
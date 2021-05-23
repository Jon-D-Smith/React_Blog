import {useState, useEffect} from 'react'

const useFetch = (url) => {

    const [data, setData] = useState([])
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)


    

    useEffect(()=>{
        fetch(url)
        .then((res) => {
            
            if(!res.ok){
             const errMsg = 'Could not fetch the data for that resource'
             throw Error(errMsg)
             setError(errMsg)
             setIsPending(false)
            }
            return res.json()
        })
        .then(data => {console.log(data)
            setData(data)
            setIsPending(false)
            setError(null)
        })
        .catch((err) => {
            setError(err.message)
            setIsPending(false)
        })
        
    }, [url])

    return {data, isPending, error}
}

export default useFetch
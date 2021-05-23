import {useState, useEffect} from 'react'
import Bloglist from './BlogList'
const Home = () => {
  
    const [blogs, setBlogs] = useState([])
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)


    useEffect(()=>{
        fetch('http://localhost:8000/blogs')
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
            setBlogs(data)
            setIsPending(false)
            setError(null)
        })
        .catch((err) => {
            setError(err.message)
            setIsPending(false)
        })
        
    }, [])

    return ( 
        <div className="home">
               {blogs && <Bloglist blogs={blogs}  title="All Blogs"/>} 
               {error && <div> {error}</div>}
               {isPending && <div>Loading...</div>}    
        </div>
     );
}
 
export default Home;
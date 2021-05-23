import {useState, useEffect} from 'react'
import Bloglist from './BlogList'
const Home = () => {
  
    const [blogs, setBlogs] = useState([])
    const [isPending, setIsPending] = useState(true)



    useEffect(()=>{
        fetch('http://localhost:8000/blogs')
        .then(res => res.json())
        .then(data => {console.log(data)
            setBlogs(data)
            setIsPending(false)
        })
        
    }, [])

    return ( 
        <div className="home">
            {isPending && <div>Loading...</div>}
               {blogs && <Bloglist blogs={blogs}  title="All Blogs"/>} 
                
        </div>
     );
}
 
export default Home;
import Bloglist from './BlogList'
import useFetch from './useFetch';
const Home = () => {
  
   const {data:blogs, isPending, error} = useFetch('http://localhost:8000/blogs')

    return ( 
        <div className="home">
               {blogs && <Bloglist blogs={blogs}  title="All Blogs"/>} 
               {error && <div> {error}</div>}
               {isPending && <div>Loading...</div>}    
        </div>
     );
}
 
export default Home;
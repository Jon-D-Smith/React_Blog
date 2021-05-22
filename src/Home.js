import {useState} from 'react'
import Bloglist from './BlogList'
const Home = () => {
  
    const [blogs, setBlogs] = useState([
        {title: "My new website!", body: "lorem ipsum text...", author: "Jon", id: 1 },
        {title: "My second dummy post!", body: "lorem ipsum text...", author: "Reagann", id: 2 },
        {title: "Feed me", body: "lorem ipsum text...", author: "BlueBelle", id: 3 }
    ])

    return ( 
        <div className="home">
                    <Bloglist blogs={blogs} title="All Blogs"/> 
        </div>
     );
}
 
export default Home;
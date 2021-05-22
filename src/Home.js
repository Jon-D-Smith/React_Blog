import {useState} from 'react'
import Bloglist from './BlogList'
const Home = () => {
  
    const [blogs, setBlogs] = useState([
        {title: "My new website!", body: "lorem ipsum text...", author: "Jon", id: 1 },
        {title: "My second dummy post!", body: "lorem ipsum text...", author: "Reagann", id: 2 },
        {title: "Feed me", body: "lorem ipsum text...", author: "BlueBelle", id: 3 },
        {title: "Jon's second post", body: "lorem ipsum text", author: "Jon", id: 4}
    ])

    return ( 
        <div className="home">
                <Bloglist blogs={blogs} title="All Blogs"/> 
                <Bloglist blogs={blogs.filter((blog) => blog.author === "Jon")} title="Jon's Blogs" />
        </div>
     );
}
 
export default Home;
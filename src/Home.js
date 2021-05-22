import {useState} from 'react'
const Home = () => {
  
    const [blogs, setBlogs] = useState([
        {title: "My new website!", body: "lorem ipsum text...", author: "Jon", id: 1 },
        {title: "My second dummy post!", body: "lorem ipsum text...", author: "Reagann", id: 2 },
        {title: "Feed me", body: "lorem ipsum text...", author: "BlueBelle", id: 3 }
    ])

    return ( 
        <div className="home">
                  {blogs.map((blog) =>(
                      <div key={blog.id} className="blog-preview">
                        <h2>{blog.title}</h2>
                        <p>Written By: {blog.author}</p>
                      </div>
                      
                   ) )}
        </div>
     );
}
 
export default Home;
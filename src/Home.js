import {useState, useEffect} from 'react'
import Bloglist from './BlogList'
const Home = () => {
  
    const [blogs, setBlogs] = useState([
        {title: "My new website!", body: "lorem ipsum text...", author: "Jon", id: 1 },
        {title: "My second dummy post!", body: "lorem ipsum text...", author: "Reagann", id: 2 },
        {title: "Feed me", body: "lorem ipsum text...", author: "BlueBelle", id: 3 },
        {title: "Jon's second post", body: "lorem ipsum text", author: "Jon", id: 4}
    ])

    const [name, setName] = useState('Mario')

    const handleDelete = (id) => {
        const newBlogs = blogs.filter((blog) => blog.id !== id )
        console.log(`this blog is id ${id}`)
        setBlogs(newBlogs)
    }

    useEffect(()=>{
        console.log('Use effect ran')
    }, [])

    return ( 
        <div className="home">
                <Bloglist blogs={blogs} handleDelete={handleDelete} title="All Blogs"/> 
                <button onClick={()=>setName('Luigi')}>Change name</button>
                <p>{name}</p>
        </div>
     );
}
 
export default Home;
import {useState} from 'react'
const Home = () => {
    const [name, setName] = useState('Mario')
    const [age, setAge] = useState(27)

    const handleClick = (e) => {
        setName('luigi')
        setAge(28)
        console.log(name)
    }



    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <p>{name}</p>
            <p>{age}</p>
            <button onClick={handleClick}>Click me!</button>
            
        </div>
     );
}
 
export default Home;
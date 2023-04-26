import './App.css';
import { useEffect, useState } from 'react';
import video from './food.mp4';
import MyRecipeComponent from './MyRecipeComponent';

function App() {

    const MY_ID = '48b70837';
    const MY_KEY = '5d72902c4a5cd79dfe5d79d279e9297f';

    const [mySearch, setMySearch] = useState('');
    const [myRecipes, setMyRecipes] = useState ([]);
    const [wordSubmitted,setWordSubmitted] = useState('avocado');

    useEffect(() =>{
        async function fetchData(){
        const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${wordSubmitted}&app_id=${MY_ID}&app_key=${MY_KEY}`);
        const data = await response.json();
        console.log(data.hits);
        setMyRecipes(data.hits);
        }
        fetchData();
    },[wordSubmitted])

    const myRecipeSearch = (e) => {
        setMySearch (e.target.value)
    }
    const finalSearch=(e)=>{
        e.preventDefault();
        setWordSubmitted(mySearch);
    }

    return(
        <div className='App'>
            <div className='container'>
                <video autoPlay muted loop>
                    <source src={video}type='video/mp4'/>
                </video>
            </div>
            <div className='container'>
                <form onSubmit={finalSearch}>
                    <input className='search' placeholder='Поиск...' onChange={myRecipeSearch}>
                    </input>
                    <button>
                    <img className='imgBtn' src="https://img.icons8.com/external-filled-outline-icons-maxicons/85/null/external-cook-restaurants-and-dining-filled-outline-filled-outline-icons-maxicons.png" alt='icon'/>
                    </button>
                </form>
            </div>
                
               {myRecipes.map(element => (
                <MyRecipeComponent label={element.recipe.label}             
                image={element.recipe.image}
                calories={element.recipe.calories}
                ingredients={element.recipe.ingredientLines}/>               
                ))}                   

        </div>
    )
}

export default App;

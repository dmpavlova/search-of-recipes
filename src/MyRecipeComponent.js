function MyRecipeComponent({label,image,calories,ingredients}){
    return(<div>
        <div className="container">
        <h2>{label}</h2>
        </div>
       
        <img className="tasty" src={image} alt="tasty"/>
        
        <div className="container">
        <ul>
            {ingredients.map((ingredient,index)=>(
                <li key={index}><img src='https://img.icons8.com/officexs/16/null/checked.png' className="icon" alt="check"/>{ingredient}</li>
            ))}
        </ul>
        </div>
        <div className="container">
        <p>{calories.toFixed()} calories</p>
        </div>
        </div>
    )
}
export default MyRecipeComponent;
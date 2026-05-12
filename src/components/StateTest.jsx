import { useState } from "react";

const StateTest = () => {
  const [mealQnty, setMealQnty] = useState(0)
 return(
    <div>
        <h1>{mealQnty}</h1>

        <button
        onClick={()=>setMealQnty(mealQnty + 1)}
        >Add Meal</button>
        <button
        
        onClick={()=>setMealQnty(mealQnty - 1 )}
        >
        Remove Meal</button>
        <button
        onClick={()=>setMealQnty(0)}
        >Reset</button>
    </div>
 )
};
export default StateTest;

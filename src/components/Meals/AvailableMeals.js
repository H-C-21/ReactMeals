import React,{useEffect,useState} from "react";
import classes from './AvailableMeals.module.css'
import Card from '../UI/Card'
import MealItem from "./MealItem/MealItem";

const AvailableMeals = () =>{

const [isLoaded,setIsLoaded] = useState(false)
const [meals,setMeals] = useState([])

useEffect(()=>{

    async function getMeals(){
      const response = await fetch('https://orderfood-a823c-default-rtdb.firebaseio.com/meals.json')
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }
      const data = await response.json()
      await setMeals(Object.values(data))
      setIsLoaded(true)
    }

    
    getMeals().catch(()=>{
      console.log('Something went wrong')
    })

  },[])
  


    const mealsList = meals.map((meal)=>{
        return(
            <MealItem meal={meal} key={meal.id}></MealItem>
        )
    })

    return (
    <section className={classes.meals}>
      {isLoaded &&
        <Card>
          <ul>{mealsList}</ul>
        </Card> }
        {!isLoaded && <Card><h2 className={classes.loading}>Loading...</h2></Card>}
    </section>
);

}

export default AvailableMeals
import classes from './MealsDescription.module.css';


const MealDescription = () => {
    return (
        <section className={classes.summary}>
            <h2>Declicious Food, Delivered to you</h2>
            <p>
                Choose your favourite meal from our broad selection of available Meals
                and enjoy a delicious lunch or dinner at home
            </p>
            <p>
                All our meals are cooked with high quality ingredient, just in time and 
                of course by experienced chefs!
            </p>
        </section>
    );
};


export default MealDescription;
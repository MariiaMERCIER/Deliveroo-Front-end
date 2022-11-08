const Meal = ({ meals, id }) => {
  return (
    <div className="plates" key={id}>
      <div className="mealDescription">
        <h3>{meals[id].title}</h3>
        <p className="plateDescription">{meals[id].description}</p>

        <span className="price">{meals[id].price} €</span>
        {meals[id].popular ? (
          <span className="populaire">
            Populaire<i class="fa-solid fa-star"></i>
          </span>
        ) : null}
      </div>

      {meals[id].picture ? (
        <div className="meal-photos">
          <img className="photoMeal" src={meals[id].picture} alt="meal" />
        </div>
      ) : null}
    </div>
  );
};

export default Meal;

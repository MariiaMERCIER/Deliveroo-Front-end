const Meal = ({ meals, choice, setChoice, id }) => {
  const handleClick = (title, price, id) => {
    const newChoice = [...choice];
    // console.log(newChoice);
    let mealPreseant = newChoice.find((elem) => elem.id === id);
    // console.log(mealPreseant);
    if (mealPreseant) {
      mealPreseant.quantity = mealPreseant.quantity + 1;
    } else {
      const obj = {
        title: title,
        price: price,
        quantity: 1,
        id: id,
      };
      newChoice.push(obj);
    }
    setChoice(newChoice);
  };

  return (
    <div
      className="plates"
      onClick={() => {
        handleClick(meals.title, meals.price, meals.id);
      }}
    >
      <div className="mealDescription">
        <h3>{meals.title}</h3>
        <p className="plateDescription">{meals.description}</p>

        <span className="price">{meals.price} €</span>
        {meals.popular ? (
          <span className="populaire">
            Populaire<i className="fa-solid fa-star"></i>
          </span>
        ) : null}
      </div>
      {meals.picture ? (
        <div className="meal-photos">
          <img className="photoMeal" src={meals.picture} alt="meal" />
        </div>
      ) : null}
    </div>
  );
};

export default Meal;

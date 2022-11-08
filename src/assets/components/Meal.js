const Meal = ({ meals, choice, setChoice, setCounter, counter }) => {
  const handleClick = (title, price) => {
    const newChoice = [...choice];
    const obj = {
      title: title,
      price: price,
      quantity: counter,
    };
    newChoice.push(obj);
    // console.log(newChoice);
    setChoice(newChoice);
    setCounter(counter);
    console(counter);
  };

  return (
    <div
      className="plates"
      onClick={() => {
        handleClick(meals.title, meals.price);
      }}
    >
      <p></p>
      {/* {console.log(meals.title)} */}
      {/* <div className="plates">
        // {console.log(meals)} */}
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

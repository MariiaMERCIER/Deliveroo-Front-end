import Meal from "./Meal";

const Menu = ({ data, choice, setChoice, counter, setCounter }) => {
  return (
    <div className="meal">
      {data.meals.length !== 0 && (
        <div>
          <h2>{data.name}</h2>
          <div className="menu">
            {data.meals.map((element, id) => {
              return (
                <Meal
                  counter={counter}
                  setCounter={setCounter}
                  choice={choice}
                  setChoice={setChoice}
                  meals={data.meals[id]}
                  key={id}
                />
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
export default Menu;

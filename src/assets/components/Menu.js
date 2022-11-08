import Meal from "./Meal";

const Menu = ({ data, index }) => {
  return (
    <div className="meal" key={index}>
      {data.categories[index].meals.length !== 0 && (
        <div>
          <h2>{data.categories[index].name}</h2>
          <div className="menu">
            {data.categories[index].meals.map((element, id) => {
              return <Meal meals={data.categories[index].meals} id={id} />;
            })}
          </div>
        </div>
      )}
    </div>
  );
};
export default Menu;

import style from "../../css/classes.module.css";
const ClassesCardComponent = ({ classes }) => {
  console.log(classes);

  return (
    <div className={style["body-container"]}>
      {classes.map((prop, index) => (
        <div key={index} className={style["class-card"]}>
          <img src={prop.icon_url} alt={prop.title} />
          <h3>{prop.title}</h3>
          <p>{prop.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ClassesCardComponent;

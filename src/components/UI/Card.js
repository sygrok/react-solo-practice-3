import classes from "./Card.module.css";

const Card = (props) => {
  return (
    <div className={`${classes.card} ${props.className}`}>{props.children}</div>
  );
  //With the use of ${props.className} we can add css to card in another component
  //We can name className whatever we want in the other component and use that name here.
  //We can use ${props.x} instead of ${props.className} if the name is x in the other component that uses card component.
};

export default Card;

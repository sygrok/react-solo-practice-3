import Card from "../UI/Card";
import classes from "./UsersList.module.css";

const UsersList = (props) => {
  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map((x) => (
          <li key={x.name + Math.random()}>
            {x.name} ({x.age} years old.)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;

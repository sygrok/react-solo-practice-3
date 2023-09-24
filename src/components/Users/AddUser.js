import React, { useRef, useState } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";

const AddUser = (props) => {
  //Ref
  const nameInputRef = useRef();
  const ageInputRef = useRef();
  //Ref

  const [error, setError] = useState();
  const [show, setShow] = useState(false);

  const addUserHandler = (event) => {
    event.preventDefault();
    console.log(nameInputRef.current.value, ageInputRef.current.value); //ref
    const enteredName = nameInputRef.current.value; //ref
    const enteredUserAge = ageInputRef.current.value; //ref

    if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
      setError({
        title: "Invalid input!",
        message: "Please enter a valid name and age.",
      });
      setShow(true);
      return;
    }

    if (enteredUserAge < 1) {
      setError({
        title: "Invalid age!",
        message: "Entered value cannot be lower then 1.",
      });
      setShow(true);
      return;
    }

    props.onAddUser(enteredName, enteredUserAge); //lifting data to app.js

    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
  };

  const showHandler = () => {
    setShow(false);
  };

  return (
    <Wrapper>
      {show && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={showHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            ref={nameInputRef} //ref
          />
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            ref={ageInputRef} //ref
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;

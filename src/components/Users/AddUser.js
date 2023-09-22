import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const addUserHandler = (event) => {
    event.preventDefault();
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" />
        <label htmlFor="age">Age:</label>
        <input type="number" id="age" />
        <button type="submit">Check</button>
      </form>
    </Card>
  );
};

export default AddUser;

import React from "react";
import PersonClass from "./Person.module.scss";

const Person = (props) => {
  /* if (Math.floor(Math.random() * 10) > 7) {
    throw new Error("Something Went Wrong!!!");
  } */

  return (
    //<p>I'm a person and my age is {Math.floor(Math.random() * 30)} years</p>
    <div className={PersonClass.personCard}>
      <p onClick={props.click}>
        I'm a {props.name} and my age is {props.age} years
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} defaultValue={props.name} />
    </div>
  );
};

export default Person;

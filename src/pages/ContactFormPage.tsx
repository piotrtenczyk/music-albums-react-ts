import React, { ChangeEvent, FormEvent, useState } from "react";
import PageTitle from "../common/PageTitle";

const ContactFormPage = () => {
  const [firstName, setFirstName] = useState("");
  const [surname, setSurname] = useState("");

  const handleFirstNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFirstName(event.currentTarget.value);
  };

  const handleSurnameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSurname(event.currentTarget.value);
  };

  const fullName = `${firstName} ${surname}`;

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    alert("A name was submitted: " + fullName);
    e.preventDefault();
  };

  return (
    <>
      <PageTitle title="Form with two states" />
      <br />
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          name="firstName"
          value={firstName}
          onChange={handleFirstNameChange}
        />
        <input
          type="text"
          name="surname"
          value={surname}
          onChange={handleSurnameChange}
        />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
};

export default ContactFormPage;

import { useState } from "react";

const Name = ({ handleChange }) => {
  const [value, setValue] = useState("");

  return (
    <>
      <label htmlFor="fullName">Full name: </label>
      <input
        name="fullName"
        id="fullName"
        type="text"
        placeholder="First and Last Name"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </>
  );
};

const Email = ({ handleChange }) => {
  const [value, setValue] = useState("");

  return (
    <>
      <label htmlFor="email">Email: </label>
      <input
        name="email"
        id="email"
        type="email"
        placeholder="Enter example@email.com"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </>
  );
};

const Phone = ({ handleChange }) => {
  const [value, setValue] = useState("");

  return (
    <>
      <label htmlFor="phoneNumber">Phone number: </label>
      <input
        name="phoneNumber"
        type="tel"
        id="phoneNumber"
        pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
        placeholder="Ex. 999-99-999"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </>
  );
};

const Address = ({ handleChange }) => {
  const [value, setValue] = useState("");

  return (
    <>
      <label htmlFor="address">Adress: </label>
      <input
        name="address"
        type="text"
        id="address"
        value={value}
        placeholder="City, Country"
        onChange={(e) => setValue(e.target.value)}
      />
    </>
  );
};

function Personal() {
  return (
    <>
      <h2>Personal Details</h2>

      <form className="personal-details">
        <Name />
        <Email />
        <Phone />
        <Address />
      </form>
    </>
  );
}

export default Personal;

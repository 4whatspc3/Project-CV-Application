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
        onChange={(e) => setValue(e.target.value)}
      />
    </>
  );
};

function Personal() {
  return (
    <>
      <h2>Personal Details</h2>

      <div>
        <Name />
        <Email />
        <Phone />
        <Address />
      </div>
    </>
  );
}

export default Personal;

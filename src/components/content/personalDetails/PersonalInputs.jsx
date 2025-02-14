const NameInput = ({ value, handleChange }) => {
  return (
    <>
      <label htmlFor="fullName">Full name: </label>
      <input
        name="fullName"
        id="fullName"
        type="text"
        placeholder="First and Last Name"
        value={value}
        onChange={handleChange}
      />
    </>
  );
};

const EmailInput = ({ value, handleChange }) => {
  return (
    <>
      <label htmlFor="email">Email: </label>
      <input
        name="email"
        id="email"
        type="email"
        placeholder="Enter example@email.com"
        value={value}
        onChange={handleChange}
      />
    </>
  );
};

const PhoneInput = ({ value, handleChange }) => {
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
        onChange={handleChange}
      />
    </>
  );
};

const AddressInput = ({ value, handleChange }) => {
  return (
    <>
      <label htmlFor="address">Adress: </label>
      <input
        name="address"
        type="text"
        id="address"
        value={value}
        placeholder="City, Country"
        onChange={handleChange}
      />
    </>
  );
};

export { NameInput, EmailInput, PhoneInput, AddressInput };

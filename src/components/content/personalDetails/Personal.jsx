import { useState } from "react";
import {
  NameInput,
  EmailInput,
  PhoneInput,
  AddressInput,
} from "./personalInputs";
import { NameInfo, EmailInfo, PhoneInfo, AddressInfo } from "./personalInfo";

function Personal() {
  const [textName, setTextName] = useState("");
  const [textEmail, setTextEmail] = useState("");
  const [textPhone, setTextPhone] = useState("");
  const [textAddress, setTextAddress] = useState("");

  return (
    <>
      <h2>Personal Details</h2>

      <form className="personal-details">
        <NameInput
          value={textName}
          handleChange={(e) => setTextName(e.target.value)}
        />
        <EmailInput
          value={textEmail}
          handleChange={(e) => setTextEmail(e.target.value)}
        />
        <PhoneInput
          value={textPhone}
          handleChange={(e) => setTextPhone(e.target.value)}
        />
        <AddressInput
          value={textAddress}
          handleChange={(e) => setTextAddress(e.target.value)}
        />
      </form>

      <div className="personal-info">
        <NameInfo value={textName} />
        <EmailInfo value={textEmail} />
        <PhoneInfo value={textPhone} />
        <AddressInfo value={textAddress} />
      </div>
    </>
  );
}

export default Personal;

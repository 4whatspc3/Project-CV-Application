import { useState } from "react";
import {
  NameInput,
  EmailInput,
  PhoneInput,
  AddressInput,
} from "./PersonalInputs";
import PersonalInfo from "./PersonalInfo";

function Personal() {
  const [personalData, setpersonalData] = useState({
    id: crypto.randomUUID(),
    textName: "",
    textEmail: "",
    textPhone: "",
    textAddress: "",
  });

  function handleChange(property, value) {
    setpersonalData((prev) => ({
      ...prev,
      [property]: value,
    }));
  }

  return (
    <>
      <h2>Personal Details</h2>
      <form className="personal-details">
        <NameInput
          value={personalData.textName}
          handleChange={(e) => handleChange("textName", e.target.value)}
        />
        <EmailInput
          value={personalData.textEmail}
          handleChange={(e) => handleChange("textEmail", e.target.value)}
        />
        <PhoneInput
          value={personalData.textPhone}
          handleChange={(e) => handleChange("textPhone", e.target.value)}
        />
        <AddressInput
          value={personalData.textAddress}
          handleChange={(e) => handleChange("textAddress", e.target.value)}
        />
      </form>

      <PersonalInfo personalData={personalData} />
    </>
  );
}

export default Personal;
